import fetch, { BASE_URL } from "../../fetch";
import Toast from "../../toast";

export const fetchOrder = (userId) => async (dispatch) => {
  dispatch({ type: "GET_ORDER_LOADING" });
  const url = BASE_URL + `/orders/${userId}`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "GET_ORDER",
      payload: data.data,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "GET_ORDER_FAILED", payload: error });
  }
};

export const postOrder = async (payload) => {
  const url = BASE_URL + `/orders`;
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

export const updateOrder = async (payload, orderId) => {
  const url = BASE_URL + `/orders/${orderId}`;
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

export const deleteOrder = async (orderId) => {
  const url = BASE_URL + `/orders/${orderId}`;
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
