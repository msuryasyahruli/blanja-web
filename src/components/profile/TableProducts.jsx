import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../config/redux/hooks/userHook";
import { useSellerProduct } from "../../config/redux/hooks/productHook";
import { fetchDeleteProduct } from "../../config/redux/actions/productAction";
import LgModal from "../modal/LgModal";
import SmModal from "../modal/SmModal";
import FormProduct from "../form/FormProduct";

const TableProducts = () => {
  const navigate = useNavigate();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [refetchKey, setRefetchKey] = useState(Date.now());
  const [loading, setLoading] = useState(false);

  const { id: userId } = useUser();
  const { data: products, isLoading } = useSellerProduct(userId, refetchKey);

  const handleCloseUpdate = () => {
    setShowUpdate(false);
    setSelectedId(null);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
    setSelectedId(null);
  };

  const handleDelete = async () => {
    setLoading(true);

    await fetchDeleteProduct(selectedId).then(() => {
      setRefetchKey(Date.now());
      handleCloseDelete();
      setLoading(false);
    });
  };

  return (
    <>
      <div className="table-responsive border rounded">
        <table
          className="table table-striped table-borderless table-hover m-0"
          style={{ minWidth: 600 }}
        >
          <thead>
            <tr className="table-active">
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Variant</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6" className="text-center mt-5" role="status">
                  <span className="spinner-border"></span>
                </td>
              </tr>
            ) : (
              products.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.product_name}</td>
                  <td>{data.product_price}</td>
                  <td>{data.product_stock}</td>
                  <td>{data.product_variants}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle px-0"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Menu
                      </button>
                      <div className="dropdown-menu">
                        <button
                          className="dropdown-item btn-success"
                          onClick={() => {
                            navigate("/detail/" + data.product_id);
                          }}
                        >
                          Detail
                        </button>
                        <button
                          className="dropdown-item btn-primary"
                          onClick={() => {
                            setShowUpdate(true);
                            setSelectedId(data.product_id);
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="dropdown-item btn-danger"
                          onClick={() => {
                            setShowDelete(true);
                            setSelectedId(data.product_id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav> */}

      <LgModal
        title="Update product"
        onShow={showUpdate}
        handleClose={handleCloseUpdate}
      >
        <FormProduct
          id={selectedId}
          handleClose={handleCloseUpdate}
          onRefetchKey={() => setRefetchKey(Date.now())}
        />
      </LgModal>
      <SmModal
        title="Delete product"
        onShow={showDelete}
        handleClose={handleCloseDelete}
      >
        <h5>Are you sure you want to delete this product?</h5>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            className="btn border rounded-pill mr-2"
            onClick={handleCloseDelete}
          >
            Cancel
          </button>
          <button
            className="btn btn-danger rounded-pill"
            onClick={handleDelete}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Confirm Delete"
            )}
          </button>
        </div>
      </SmModal>
    </>
  );
};

export default TableProducts;
