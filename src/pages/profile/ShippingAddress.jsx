import React from "react";
import AddressList from "../../components/address/AddressList";

const ShippingAddress = () => {
  return (
    <>
      <div className="p-3 mt-md-3 border shadow-sm rounded bg-white h-100">
        <h4>Choose another address</h4>
        <p>Manage your shipping address</p>
        <hr />
        <div className="p-lg-4">
          <AddressList />
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
