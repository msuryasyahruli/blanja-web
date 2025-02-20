import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Headers from "../navbar/Headers";

const ProfileLayout = () => {
  return (
    <>
      <Headers />
      <main className="container">
        <div className="row">
          <SideBar />
          <div className="col-lg-9 col-md-8 py-md-4 p-3">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileLayout;
