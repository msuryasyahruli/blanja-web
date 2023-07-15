import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  let { id } = useParams();
  let [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2525/products/${id}`)
      .then((res) => {
        setProducts(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <section>
        <p style={{ fontWeight: 600, fontSize: 20 }}>Description</p>
        <p style={{ fontWeight: 500, fontSize: 14, color: "#9b9b9b" }}>
        {product.description}
        </p>
      </section>
    </>
  );
};

export default Description;
