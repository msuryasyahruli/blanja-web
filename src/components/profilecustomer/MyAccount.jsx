import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const navigate = useNavigate();

  const isLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const customerId = localStorage.getItem("customerId");
  const [customer, setCustomer] = useState([]);
  // console.log(customer);
  const handleChange = (e) => {
    setCustomer({
      ...customer,
    });
    // console.log(customer);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("customer_fullname", customer.customer_fullname);
  //   formData.append("customer_email", customer.customer_email);
  //   formData.append("customer_phone", customer.customer_phone);
  //   formData.append("store_name", customer.store_name);
  //   formData.append("store_description", customer.store_description);
  //   axios
  //     .put(
  //       `${process.env.REACT_APP_API_KEY}/customer/${customerId}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       },
  //       [customerId]
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       alert("product updated");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err);
  //     });
  // };

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
      <style>
        .profileIn input {"{"}
        width: 100%; height: 48px; border-radius: 5px; margin-bottom: 10px;
        {"}"}
      </style>
      <div
        className="tab-pane fade show active"
        id="v-pills-Store"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
        style={{ padding: "50px 0" }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <section>
            <div className="p-3">
              <div>
                <h4>My profile</h4>
                <p>Manage your profile information</p>
              </div>
              <hr />
            </div>
            <div className="row">
              <section
                className="m-3 col-xl-3 row align-items-center"
                style={{ display: "grid" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={require("../../assets/image/fotoprofile110.png")}
                    alt="profile"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <button
                    style={{
                      width: 140,
                      height: 36,
                      borderRadius: 50,
                      border: 0,
                    }}
                  >
                    Select image
                  </button>
                </div>
              </section>
              <section className="m-3 col-xl-8">
                {/* <form onSubmit={handleSubmit}> */}
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Name</h6>
                    </div>
                    <div className="col-md-8 profileIn">
                      <input
                        type="text"
                        placeholder="Name"
                        name="customer_name"
                        value={customer.customer_fullname}
                        onChange={handleChange}
                        style={{ border: '1px solid black', padding: 10 }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Email</h6>
                    </div>
                    <div className="col-md-8 profileIn">
                      <input
                        type="text"
                        placeholder="example@gmail.com"
                        value={customer.customer_email}
                        onChange={handleChange}
                        style={{ border: '1px solid black', padding: 10 }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Phone number</h6>
                    </div>
                    <div className="col-md-8 profileIn">
                      <input
                        type="text"
                        placeholder="08xxxxxxxxxx"
                        value={customer.customer_phone}
                        onChange={handleChange}
                        style={{ border: '1px solid black', padding: 10 }}
                      />
                    </div>
                  </div>
                  {/* <button type="submit" className="btn btn-primary">
                    Update
                  </button> */}
                {/* </form> */}
              </section>
            </div>
          </section>
          <div
            className="p-4"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <button
              style={{
                width: 140,
                height: 36,
                border: 0,
                borderRadius: "50px",
                backgroundColor: "#db3022",
                color: "#efefef",
              }}
              onClick={isLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
