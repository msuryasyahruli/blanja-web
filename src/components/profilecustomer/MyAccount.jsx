import axios from "axios";
import React, { useEffect, useState } from "react";

const MyAccount = () => {
  const customerId = localStorage.getItem("customerId");
  const [customer, setCustomer] = useState({
    customer_fullname: "",
    customer_email: "",
    customer_phone: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
    console.log(customer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_API_KEY}/customer/${customerId}`, customer)
      .then((res) => {
        setCustomer(res);
        alert("Profile updated");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

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
              <section className="m-3 col-xl-3 row d-flex justify-content-center">
                <div>
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
                </div>
              </section>
              <section className="m-3 col-xl-8">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Name</h6>
                    </div>
                    <div className="col-md-8 profileIn">
                      <input
                        type="text"
                        placeholder="Name"
                        name="customer_fullname"
                        value={customer.customer_fullname}
                        onChange={handleChange}
                        style={{ border: "1px solid black", padding: 10 }}
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
                        name="customer_email"
                        value={customer.customer_email}
                        onChange={handleChange}
                        style={{ border: "1px solid black", padding: 10 }}
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
                        name="customer_phone"
                        value={customer.customer_phone}
                        onChange={handleChange}
                        style={{ border: "1px solid black", padding: 10 }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end pt-2">
                    <button
                      type="submit"
                      style={{ width: 100, height: 40, borderRadius: 100 }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
