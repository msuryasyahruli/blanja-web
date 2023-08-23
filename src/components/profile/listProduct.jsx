import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalUpdate from "../modal/modalUpdate";
import ModalDelete from "../modal/modalDelete";
import Pagination from "../pagination/pagination";
import SingleColumnDemo from "../sorting/sorting";

const ListProduct = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/products`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              : product.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((product) => (
            <div
              key={product.id}
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
                    src={product.photo}
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
                <h6>{product.name}</h6>
                <h6>Rp. {product.price}</h6>
                <h6>Stock : {product.stock}</h6>
                <h6>Category : {product.category}</h6>
              </div>
              <div className="col-lg-6">
                <p>{product.description}</p>
              </div>
              <div className="col-12" style={{ padding: 15 }}>
                <Link to={`/detail/${product.id}`}>
                  <button className="btn btn-primary m-1">Detail</button>
                </Link>
                <ModalUpdate
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                  photo={product.photo}
                  description={product.description}
                  category={product.id_category}
                >
                  Update
                </ModalUpdate>
                <ModalDelete id={product.id}>Delete</ModalDelete>
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
