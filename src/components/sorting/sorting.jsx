import React, { useState, useEffect } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import axios from "axios";

export default function SingleColumnDemo() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="card">
      <TreeTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="name" header="Name" expander sortable></Column>
        <Column field="price" header="Price" sortable></Column>
        <Column field="stock" header="Stock" sortable></Column>
      </TreeTable>
    </div>
  );
}
