import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LogModal from "./LogModal";

const BuyProduct = () => {
  const navigate = useNavigate();
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
        Swal.fire("Success", "Buy", "success");
        navigate("/checkout");
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
              className="d-flex justify-content-center align-items-center w-100"
              style={{
                height: 48,
                fontSize: 14,
                fontWeight: 500,
                border: 0,
                borderRadius: 50,
                backgroundColor: "#db3022",
                color: "#efefef",
              }}
            >
              Buy Now
            </button>
          </form>
        </>
      );
    } else {
      return (
        <>
          <button
            className="d-flex justify-content-center align-items-center w-100"
            style={{
              height: 48,
              fontSize: 14,
              fontWeight: 500,
              border: 0,
              borderRadius: 50,
              backgroundColor: "#db3022",
              color: "#efefef",
            }}
          >
            Buy Now
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
          className="d-flex justify-content-center align-items-center w-100"
          style={{
            height: 48,
            fontSize: 14,
            fontWeight: 500,
            border: 0,
            borderRadius: 50,
            backgroundColor: "#db3022",
            color: "#efefef",
          }}
        >
          Buy Now
        </button>
        <LogModal />
      </>
    );
  }
};

export default BuyProduct;
