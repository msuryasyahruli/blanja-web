import axios from "axios";
import swal from "sweetalert";

const createProductAction = (data, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", photo);
    formData.append("description", data.description);
    formData.append("id_category", data.id_category);
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