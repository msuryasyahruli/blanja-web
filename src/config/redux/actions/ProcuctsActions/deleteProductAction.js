import axios from "axios";
import Swal from "sweetalert2";

const deleteProductAction = (product_id, setShow) => async (dispatch) => {
  try {
    const products = await axios.delete(`${process.env.REACT_APP_API_KEY}/products/${product_id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = products.data;
    Swal.fire("Success", "Product Deleted", "success")
    setShow(false);
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (error) {
    console.log(error);
    alert(error);
    setShow(false);
  }
};

export default deleteProductAction;
