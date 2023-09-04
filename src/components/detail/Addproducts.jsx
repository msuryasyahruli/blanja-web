import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LogModal from "./LogModal";

const Addproducts = () => {
  const customerId = localStorage.getItem("customerId");
  const login = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { id } = useParams();
  const [data] = useState({
    product_id: id,
    customer_id: customerId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_KEY}/orders`, data)
      .then((res) => {
        Swal.fire("Success", "Product Added", "success");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  if (login) {
    if (role === "customer") {
      return (
        <>
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="btn btn-primary d-flex justify-content-center align-items-center w-100"
              style={{
                height: 48,
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 50,
                border: 0,
                backgroundColor: "#efefef",
                color: "black",
              }}
            >
              Add bag
            </button>
          </form>
        </>
      );
    } else {
      return (
        <>
          <button
            className="btn btn-primary d-flex justify-content-center align-items-center w-100"
            style={{
              height: 48,
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 50,
              border: 0,
              backgroundColor: "#efefef",
              color: "black",
            }}
          >
            Add bag
          </button>
        </>
      );
    }
  } else {
    return (
      <>
        <button
          data-toggle="modal"
          data-target="#tologin"
          className="btn btn-primary d-flex justify-content-center align-items-center w-100"
          style={{
            height: 48,
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 50,
            border: 0,
            backgroundColor: "#efefef",
            color: "black",
          }}
        >
          Add bag
        </button>
        <LogModal />
      </>
    );
  }
};

export default Addproducts;
