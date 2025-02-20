import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getMenuBar from "./MenuBar";

// assets
import Profile from "../../assets/image/profile.png";

const SideBar = () => {
  const MenuBar = getMenuBar();
  const navigate = useNavigate();
  const location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  const params = queryParams.get("sub");

  useEffect(() => {
    if (MenuBar.length > 0 && MenuBar[0].subMenu?.length > 0 && !params) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("sub", MenuBar[0].subMenu[0].path);
      navigate(location.pathname + currentUrl.search, { replace: true });
    }
  }, [MenuBar, location.pathname, navigate]);

  const toggleMenu = (params, path) => {
    if (params) {
      const currentUrl = new URL(window.location);
      currentUrl.searchParams.set("sub", params);
      navigate(path + currentUrl.search);
    } else {
      navigate(path);
    }
  };

  const toggleSubMenu = (params) => {
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set("sub", params);
    navigate(location.pathname + currentUrl.search);
  };

  return (
    <div className="col-lg-3 col-md-4 d-flex flex-column p-3">
      <section className="d-flex align-items-center my-4">
        <img
          src={Profile}
          alt="profile"
          style={{
            height: 60,
            width: 60,
            objectFit: "cover",
            borderRadius: 50,
          }}
        />
        <div className="ml-3 w-100">
          <h6 className="m-0">Username</h6>
          <button className="btn p-0 text-muted">Ubah profile</button>
        </div>
      </section>

      {MenuBar?.map((menu) => (
        <div key={menu.path}>
          <button
            className={`btn d-flex align-items-center w-100 text-left px-0 my-2 ${
              location.pathname === menu.path
                ? "text-dark font-weight-bold"
                : "text-black-50"
            }`}
            onClick={() =>
              toggleMenu(menu?.subMenu ? menu.subMenu[0].path : null, menu.path)
            }
          >
            <div
              className={`mr-3 rounded-circle d-flex align-items-center justify-content-center ${menu.bgColor}`}
              style={{ width: "32px", height: "32px" }}
            >
              <img src={menu.icon} alt={menu.label} style={{ width: "18px" }} />
            </div>
            <span>{menu.label}</span>
            {menu.subMenu && (
              <span className="ml-auto">
                {location.pathname === menu.path ? "▲" : "▼"}
              </span>
            )}
          </button>

          {location.pathname === menu.path && (
            <div className="ml-5">
              {menu?.subMenu?.map((sub, index) => (
                <button
                  key={index}
                  className={`btn w-100 text-left px-0 ${
                    params === sub.path
                      ? "text-dark font-weight-normal"
                      : "text-black-50"
                  }`}
                  onClick={() => toggleSubMenu(sub.path)}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
