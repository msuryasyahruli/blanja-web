import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../config/redux/actions/userAction";
import { setStorage } from "../../config/storage";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    user_email: "",
    user_password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await login(data);
      if (res.statusCode === 201) {
        setStorage(res.data.token, res.data);
        navigate("/", { replace: true });
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
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
            Please login with your account
          </p>
          <div className="btn-group mb-4" style={{ width: 245 }}>
            <button
              type="button"
              className={`btn w-50 ${
                data.role === "customer"
                  ? "btn-danger text-white"
                  : "text-muted border"
              }`}
              name="role"
              value="customer"
              onClick={handleChange}
            >
              Customer
            </button>
            <button
              type="button"
              className={`btn w-50 ${
                data.role === "seller"
                  ? "btn-danger text-white"
                  : "text-muted border"
              }`}
              name="role"
              value="seller"
              onClick={handleChange}
            >
              Seller
            </button>
          </div>
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
            <div className="form-group">
              <input
                required
                type="password"
                className="form-control"
                placeholder="Password"
                name="user_password"
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-end mb-3">
              <span>
                <Link to="/forgot">Forgot password?</Link>
              </span>
            </div>
            <button
              type="submit"
              className="btn btn-danger w-100 rounded-pill"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="mt-2">
            <p>
              Don't have a Blanja account?{" "}
              <span>
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
