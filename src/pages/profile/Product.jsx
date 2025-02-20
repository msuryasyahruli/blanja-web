import React, { useState } from "react";
import TableProducts from "../../components/profile/TableProducts";

// assets
import NoProduct from "../../assets/image/dontHaveProduct.png";

const Product = () => {
  const tabs = [
    { id: "all-items", label: "All items" },
    { id: "sold-out", label: "Sold out" },
    { id: "archived", label: "Archived" },
  ];

  const [activeTab, setActiveTab] = useState("all-items");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="p-3 mt-md-3 border shadow-sm rounded bg-white h-100">
        <h4>My product</h4>
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
            {activeTab === "all-items" ? (
              <TableProducts />
            ) : (
              <div className="text-center py-5">
                <img src={NoProduct} alt="no order" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
