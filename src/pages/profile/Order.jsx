import React, { useState } from "react";

import NoOrder from "../../assets/image/no-order.png";
import { useOrder } from "../../config/redux/hooks/orderHook";
import { useUser } from "../../config/redux/hooks/userHook";

const tabs = [
  { id: "all-items", label: "All items" },
  { id: "not-yet-paid", label: "Not yet paid" },
  { id: "packed", label: "Packed" },
  { id: "sent", label: "Sent" },
  { id: "completed", label: "Completed" },
  { id: "order-cancel", label: "Order cancel" },
];

const Order = () => {
  const [activeTab, setActiveTab] = useState("all-items");

  const { id: userId } = useUser();
  const { data: orderData, isLoading } = useOrder(userId);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="p-3 mt-md-3 border shadow-sm rounded bg-white h-100">
      <h4>My order</h4>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <input
        type="search"
        placeholder="Search"
        className="border rounded-pill my-4 py-1 px-3"
      />

      <div className="tab-content" id="nav-tabContent">
        <div
          key="all-items"
          className="tab-pane fade show active"
          id="all-items"
          role="tabpanel"
          aria-labelledby="all-items-tab"
        >
          {isLoading ? (
            <div className="text-center mt-5" role="status">
              <span className="spinner-border"></span>
            </div>
          ) : activeTab === "all-items" ? (
            orderData.map((data, index) => (
              <div key={index} className="mt-3">
                <hr />
                <h5>Your orders</h5>
                <p className="m-0">
                  Order ID:{" "}
                  <span className="text-danger">
                    {data.order_id.replace(
                      /^(.{8})-(.{4})-(.{4})-(.{4})-(.{12})$/,
                      "$1-****-****-****-$5"
                    )}
                  </span>
                </p>
                <p className="m-0">
                  Status:{" "}
                  <span className="font-weight-bold">{data.order_status}</span>
                </p>
                <p className="m-0">Payment method: {data.payment_method}</p>
                <p>
                  Total:{" "}
                  <span className="text-danger font-weight-bold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "idr",
                    }).format(data.total_price)}
                  </span>
                </p>
                {data.products.map((data, index) => (
                  <section
                    key={index}
                    className="d-flex shadow-sm rounded mb-2 border p-2 p-sm-3 bg-white"
                  >
                    <img
                      src={data?.product_thumbnail}
                      alt="thumbnail"
                      className="rounded bg-danger mr-2 mr-sm-3"
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                      }}
                    />
                    <div className="row w-100">
                      <div className="col-md-6">
                        <h6>
                          {data?.product_name}{" "}
                          <small>{data.quantity + "x"}</small>
                        </h6>
                        <p className="m-0">Color: {data?.picked_variant}</p>
                        <small className="text-muted">{data?.store_name}</small>
                      </div>
                      <div className="text-md-right col-md-6">
                        <h6 className="font-weight-bold text-danger">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "idr",
                          }).format(data.product_price)}
                        </h6>
                      </div>
                    </div>
                  </section>
                ))}
                <p className="text-black-50 text-right m-0">
                  {new Date(data.created_at).toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                  ,{" "}
                  {new Date(data.created_at).toLocaleDateString("en-EN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <img src={NoOrder} alt="no order" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
