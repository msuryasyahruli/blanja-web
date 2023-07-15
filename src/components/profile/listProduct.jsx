import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalUpdate from "../modal/modalUpdate";
import ModalDelete from "../modal/modalDelete";

const ListProduct = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2525/products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#efefef",
          borderRadius: 15,
          margin: 15,
          padding: 1,
        }}
      >
        {products.map((product) => (
          <div
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
              <h6>Rp {product.price}</h6>
              <h6>Stock {product.stock}</h6>
              <h6>{product.category}</h6>
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
    </>
  );
};

export default ListProduct;
