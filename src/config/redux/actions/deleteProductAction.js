import axios from "axios";

const deleteProductAction = (id, setShow) => async (dispatch) => {
  try {
    const products = await axios.delete(`http://localhost:2525/products/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = products.data;
    console.log(result);
    alert("product deleted");
    setShow(false);
    window.location.reload();
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (error) {
    console.log(error);
    alert(error);
    setShow(false);
  }
};

export default deleteProductAction;
