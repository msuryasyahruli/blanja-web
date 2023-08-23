import axios from "axios";
import swal from "sweetalert";

const deleteProductAction = (id, setShow) => async (dispatch) => {
  try {
    const products = await axios.delete(`${process.env.REACT_APP_API_KEY}/products/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = products.data;
    console.log(result);
    swal({
      title: "Product Success",
      text: "Product Deleted",
      icon: "success",
      buttons: "Ok",
    })
    .then(()=>{
      window.location.reload()
    });
    setShow(false);
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (error) {
    console.log(error);
    alert(error);
    setShow(false);
  }
};

export default deleteProductAction;
