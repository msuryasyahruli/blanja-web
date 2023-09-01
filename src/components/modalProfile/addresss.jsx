import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalUpdateAddress from "../address/modalUpdateAddress";

const Addresss = () => {
  const customerId = localStorage.getItem("customerId");

  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/address/${customerId}`)
      .then((res) => {
        if (res.data.data[0]) {
          setAddress(res.data.data[0]);
        }else{
          setAddress(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerId]);

  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/customer/detail/${customerId}`)
      .then((res) => {
        setCustomer(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerId]);

  return (
    <>
      <div
        style={{
          border: "1px solid",
          borderRadius: 10,
          padding: "20px",
          color: "#DB3022",
          margin: "20px",
        }}
      >
        <p
          style={{
            color: "#000",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {customer.customer_fullname}
        </p>
        <p
          style={{
            color: "#000",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {address.address_name}, {address.posttal_code}, {address.city},{" "}
          {address.posttal_code}
        </p>
        <ModalUpdateAddress />
      </div>
    </>
  );
};

export default Addresss;
