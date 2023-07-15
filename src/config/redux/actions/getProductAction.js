import axios from "axios";

const getProductAction = () => async (dispatch) => {
  try {
    const products = await axios.get("http://localhost:2525/products");
    const result = products.data.data;
    dispatch({ type: "GET_ALL_PRODUCT", payload: result });
  } catch (error) {
    console.log(error);
  }
};

export default getProductAction;
