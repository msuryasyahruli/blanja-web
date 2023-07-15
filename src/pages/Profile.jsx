import React from "react";
import HeaderAfterLog from "../components/navbar/headerAfterLog";
import ProfileName from "../components/profile/Profile";
import DescriptionProfile from "../components/profile/DescriptionProfile";

const Profile = () => {
  return (
    <>
      <HeaderAfterLog />
      <main>
        <div className="container">
          <div className="row">
            <ProfileName/>
            <DescriptionProfile/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
