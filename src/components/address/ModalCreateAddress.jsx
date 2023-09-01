import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ModalCreateAddress = () => {
  const customerId = localStorage.getItem("customerId");
  const [data, setData] = useState({
    address_name: "",
    posttal_code: "",
    city: "",
    save_address_as: "",
    customer_id: `${customerId}`,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_KEY}/address`, data)
      .then((res) => {
        setData(res.data.data);
        Swal.fire("Success", "Login succAddress addedess", "success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

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
      {" "}
      <h6
        data-toggle="modal"
        data-target="#addAddress"
        className="justify-content-center d-flex align-items-center btn"
        style={{
          border: "1px solid",
          borderRadius: 10,
          height: "86px",
          color: "#9B9B9B",
          margin: "20px",
        }}
      >
        Add new address
      </h6>
      <div className="modal fade" id="addAddress" style={{ color: "black" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center d-flex">
              <h4 className="modal-title">Add New Address</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div>
                  <p className="mb-1 mt-2">
                    Save address as (ex : home address, office address)
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rumah"
                    name="save_address_as"
                    value={data.save_address_as}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="mb-1 mt-2">Recipient’s name</p>
                  <input
                    type="text"
                    className="form-control"
                    value={customer.customer_fullname}
                  />
                </div>
                <div>
                  <p className="mb-1 mt-2">Recipient's telephone number</p>
                  <input
                    type="text"
                    className="form-control"
                  />
                </div>
                <div>
                  <p className="mb-1 mt-2">Address</p>
                  <input
                    type="text"
                    className="form-control"
                    name="address_name"
                    value={data.address_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="mb-1 mt-2">Postal code</p>
                  <input
                    type="text"
                    className="form-control"
                    name="posttal_code"
                    value={data.posttal_code}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="mb-1 mt-2">City or Subdistrict</p>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreateAddress;
