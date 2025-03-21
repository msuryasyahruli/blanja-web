import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPw = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    user_email: "",
    user_password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => {
      navigate("/reset");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="h-100 pt-5">
        <section
          className="d-flex flex-column align-items-center text-center mx-auto"
          style={{ maxWidth: 400, minWidth: 300 }}
        >
          <img
            src={require("../../assets/image/Group 1158.png")}
            alt="logo"
            className="mb-4"
          />
          <p className="mb-4 font-weight-bold" style={{ fontSize: 18 }}>
            Reset password
          </p>
          <form className="w-100 p-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                required
                type="email"
                className="form-control"
                placeholder="Email"
                name="user_email"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger w-100 rounded-pill mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ForgotPw;
