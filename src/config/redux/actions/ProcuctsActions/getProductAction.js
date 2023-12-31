import axios from "axios";

const getProductAction = () => async (dispatch) => {
  try {
    const products = await axios.get(
      `${process.env.REACT_APP_API_KEY}/products`
    );
    const result = products.data.data;
    dispatch({ type: "GET_ALL_PRODUCT", payload: result });
  } catch (error) {
    console.log(error);
  }
};

export default getProductAction;
