import React from "react";
import HeaderAfterLog from "../components/navbar/headerAfterLog";
import SellerProfile from "../components/profile/SellerProfile";
import MyProfile from "../components/profile/MyProfile";
import CustomerProfile from "../components/profilecustomer/CustomerProfile";
import HeaderSeller from "../components/navbar/headerSeller";
// import MyAccount from "../components/profilecustomer/MyAccount";

const Profile = () => {
  const role = localStorage.getItem("role");

  if (role === "seller") {
    return (
      <>
        {role === "customer" ? <HeaderAfterLog /> : <HeaderSeller />}{" "}
        <main>
          <div className="container">
            <div className="row">
              <SellerProfile />
              <MyProfile />
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        {role === "customer" ? <HeaderAfterLog /> : <HeaderSeller />}{" "}
        <main>
          <div className="container">
            <div className="row">
              <CustomerProfile />
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Profile;
