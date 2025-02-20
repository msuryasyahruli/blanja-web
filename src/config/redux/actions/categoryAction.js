import fetch, { BASE_URL } from "../../fetch";
import Toast from "../../toast";

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: "GET_CATEGORIES_LOADING" });
  const url = BASE_URL + `/categories`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data.data,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "GET_CATEGORIES_FAILED", payload: error });
  }
};
