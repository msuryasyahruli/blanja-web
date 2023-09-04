import React from "react";
import { useNavigate } from "react-router-dom";

const ModalLogout = () => {
  const navigate = useNavigate();

  const isLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div>
        <button
          className="btn"
          data-toggle="modal"
          data-target="#logout"
          style={{
            width: "100%",
            height: 36,
            border: 0,
            borderRadius: 10,
            backgroundColor: "#db3022",
            color: "#efefef",
          }}
        >
          Logout
        </button>
        <div className="modal fade" id="logout" style={{ color: "black" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Logout</h4>
              </div>
              <h3 className="d-flex justify-content-center">
                Are you sure you want to logout?
              </h3>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={isLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogout;
