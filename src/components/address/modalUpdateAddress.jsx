import axios from "axios";
import React, { useEffect, useState } from "react";

const ModalUpdateAddress = () => {
  const customerId = localStorage.getItem("customerId");

  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/address/${customerId}`)
      .then((res) => {
        setAddress(res.data.data);
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
      <h6 className="btn" data-toggle="modal" data-target="#updateAddress">
        Change address
      </h6>
      <div className="modal fade" id="updateAddress" style={{ color: "black" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h4 className="modal-title">Change address</h4>
            </div>
            <div className="modal-body">
              {address.map((address, index) => (
                <div
                  style={{
                    border: "1px solid",
                    borderRadius: 10,
                    padding: "20px",
                    color: "#DB3022",
                    marginBottom: "20px",
                  }}
                  key={index}
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
                    {address.address_name}, {address.posttal_code},{" "}
                    {address.city}, {address.posttal_code}
                  </p>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn-danger"
                data-dismiss="modal"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUpdateAddress;
