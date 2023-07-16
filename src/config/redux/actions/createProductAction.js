import axios from "axios";

const createProductAction = (data, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", photo);
    formData.append("description", data.description);
    formData.append("id_category", data.id_category);
    const products = await axios.post("http://localhost:2525/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = products.data.data;
    console.log(result);
    alert("product created");
    window.location.reload();
    dispatch({ type: "CREATE_PRODUCT", payload: result })
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

export default createProductAction;