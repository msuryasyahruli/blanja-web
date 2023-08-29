import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalUpdate from "../modal/modalUpdate";
import ModalDelete from "../modal/modalDelete";
import Pagination from "../pagination/pagination";
// import SingleColumnDemo from "../sorting/sorting";

const ListProduct = () => {
  const sellerId = localStorage.getItem("sellerId");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/products/seller/${sellerId}`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <input
        type="text"
        style={{
          width: 230,
          height: "19.8px",
          margin: 15,
          padding: 20,
          borderRadius: 50,
          border: 0,
          backgroundColor: "#efefef",
        }}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      {/* <SingleColumnDemo/> */}
      <div
        style={{
          backgroundColor: "#efefef",
          borderRadius: 15,
          margin: 15,
          padding: 1,
        }}
      >
        {currentPosts
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.product_name
                  .toLowerCase()
                  .includes(search.toLowerCase());
          })
          .map((product) => (
            <div
              key={product.product_id}
              className="row"
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                margin: 6,
                paddingTop: 15,
              }}
            >
              <div className="col-lg-3 col-md-4 col-6">
                <div className="photoProduct">
                  <img
                    src={product.product_photo}
                    alt="Product"
                    crossOrigin="anonymous"
                    style={{ width: 100 }}
                  />
                </div>
              </div>
              <div
                className="col-lg-3 col-6"
                style={{ lineHeight: "20%", padding: 5 }}
              >
                <h6>{product.product_name}</h6>
                <h6>
                  {new Intl.NumberFormat("Rp", {
                    style: "currency",
                    currency: "idr",
                  }).format(product.product_price)}{" "}
                </h6>
                <h6>Stock : {product.product_stock}</h6>
                <h6>Category : {product.category_id}</h6>
              </div>
              <div className="col-lg-6">
                <p>{product.product_description}</p>
              </div>
              <div className="col-12" style={{ padding: 15 }}>
                <Link to={`/detail/${product.product_id}`}>
                  <button className="btn btn-primary m-1">Detail</button>
                </Link>
                <ModalUpdate
                  product_id={product.product_id}
                  product_name={product.product_name}
                  product_price={product.product_price}
                  product_stock={product.product_stock}
                  product_photo={product.product_photo}
                  product_description={product.product_description}
                  product_category={product.category_id}
                >
                  Update
                </ModalUpdate>
                <ModalDelete product_id={product.product_id}>
                  Delete
                </ModalDelete>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ListProduct;
