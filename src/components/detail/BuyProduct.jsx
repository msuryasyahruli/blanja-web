import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BuyProduct = () => {
  const navigate = useNavigate();
  const customerId = localStorage.getItem("customerId");
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
        alert("product added");
        navigate("/checkout");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

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
};

export default BuyProduct;
