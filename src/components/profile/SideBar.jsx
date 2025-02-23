import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getMenuBar from "./MenuBar";
import { useUser } from "../../config/redux/hooks/userHook";

// assets
import ProfileIcon from "../../assets/image/fotoprofile.png";

const SideBar = () => {
  const MenuBar = getMenuBar();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: userData } = useUser();

  useEffect(() => {
    MenuBar.forEach((menu) => {
      if (menu.subMenu && location.pathname === menu.path) {
        navigate(menu.subMenu[0].path, { replace: true });
      }
    });
  }, [MenuBar, location.pathname, navigate]);

  const handleNavigation = (menu) => {
    if (menu.subMenu) {
      navigate(menu.subMenu[0].path);
    } else {
      navigate(menu.path);
    }
  };

  return (
    <div className="col-lg-3 col-md-4 d-flex flex-column p-3">
      <section className="d-flex align-items-center my-4">
        <img
          src={userData.user_photo || ProfileIcon}
          alt="profile"
          style={{
            height: 60,
            width: 60,
            objectFit: "cover",
            borderRadius: 50,
            aspectRatio: 1/1,
          }}
        />
        <div className="ml-3 w-100">
          <h6 className="m-0">{userData.username}</h6>
          <button className="btn p-0 text-muted">Ubah profile</button>
        </div>
      </section>

      {MenuBar?.map((menu, index) => (
        <div key={index}>
          <button
            className={`btn d-flex align-items-center w-100 text-left px-0 my-2 ${
              location.pathname === menu.path ||
              (menu.subMenu &&
                menu.subMenu.some((sub) => location.pathname === sub.path))
                ? "text-dark font-weight-bold"
                : "text-black-50"
            }`}
            onClick={() => handleNavigation(menu)}
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
                {menu.subMenu &&
                menu.subMenu.some((sub) => location.pathname === sub.path)
                  ? "▲"
                  : "▼"}
              </span>
            )}
          </button>

          {menu.subMenu &&
            menu.subMenu.some((sub) => location.pathname === sub.path) && (
              <div className="ml-5">
                {menu?.subMenu?.map((sub, subIndex) => (
                  <button
                    key={subIndex}
                    className={`btn w-100 text-left px-0 ${
                      location.pathname === sub.path
                        ? "text-dark"
                        : "text-black-50"
                    }`}
                    onClick={() => navigate(sub.path)}
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
