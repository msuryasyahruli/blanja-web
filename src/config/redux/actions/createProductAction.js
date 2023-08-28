import axios from "axios";
import swal from "sweetalert";

const createProductAction = (data, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("product_name", data.product_name);
    formData.append("product_stock", data.product_stock);
    formData.append("product_price", data.product_price);
    formData.append("product_photo", photo);
    formData.append("product_description", data.product_description);
    formData.append("category_id", data.category_id);
    formData.append("seller_id", data.seller_id);
    const products = await axios.post(`${process.env.REACT_APP_API_KEY}/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = products.data.data;
    console.log(result);
    swal({
      title: "Product Success",
      text: "Product Created",
      icon: "success",
      buttons: "Ok",
    })
    .then(()=>{
      window.location.reload()
    });
    dispatch({ type: "CREATE_PRODUCT", payload: result })
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

export default createProductAction;