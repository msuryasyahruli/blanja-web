import axios from "axios";
import swal from "sweetalert";

const updateProductAction = (data, product_id, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("product_name", data.product_name);
    formData.append("product_stock", data.product_stock);
    formData.append("product_price", data.product_price);
    formData.append("product_photo", photo);
    formData.append("product_description", data.product_description);
    formData.append("category_id", data.category_id);
    const products = await axios.put(`${process.env.REACT_APP_API_KEY}/products/${product_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = products.data;
    console.log(products);
    swal({
      title: "Product Success",
      text: "Product Updated",
      icon: "success",
      buttons: "Ok",
    })
    // .then(()=>{
    //   window.location.reload()
    // });
    setShow(false);
    dispatch({ type: "UPDATE_PRODUCT", payload: result })
  } catch (err) {
    console.log(err);
    alert(err);
    setShow(false);
  }
};

export default updateProductAction;
