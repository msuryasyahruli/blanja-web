import fetch, { BASE_URL } from "../../fetch";
import Toast from "../../toast";

export const fetchCart = (userId) => async (dispatch) => {
  dispatch({ type: "GET_CART_LOADING" });
  const url = BASE_URL + `/carts/${userId}`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "GET_CART",
      payload: data.data,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "GET_CART_FAILED", payload: error });
  }
};

export const postCart = async (payload) => {
  const url = BASE_URL + `/carts`;
  try {
    const { data } = await fetch.post(url, payload);
    if (data.statusCode === 201) {
      Toast.fire({
        icon: "success",
        title: data.message,
      });
    }
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    throw error;
  }
};

export const updateCart = async (payload, cartId) => {
  const url = BASE_URL + `/carts/${cartId}`;
  try {
    // eslint-disable-next-line
    const { data } = await fetch.put(url, payload);
    // if (data.statusCode === 200) {
    //   Toast.fire({
    //     icon: "success",
    //     title: data.message,
    //   });
    // }
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    throw error;
  }
};

export const deleteCart = async (cartId) => {
  const url = BASE_URL + `/carts/${cartId}`;
  try {
    const { data } = await fetch.delete(url);
    if (data.statusCode === 200) {
      Toast.fire({
        icon: "success",
        title: data.message,
      });
    }
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    throw error;
  }
};
