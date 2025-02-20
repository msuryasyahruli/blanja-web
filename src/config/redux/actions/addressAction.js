import fetch, { BASE_URL } from "../../fetch";
import Toast from "../../toast";

export const fetchAddress = (userId) => async (dispatch) => {
  dispatch({ type: "GET_ADDRESS_LOADING" });
  const url = BASE_URL + `/address/${userId}`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "GET_ADDRESS",
      payload: data.data,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "GET_ADDRESS_FAILED", payload: error });
  }
};

export const postAddress = async (payload, userId) => {
  const url = BASE_URL + `/address/${userId}`;
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

export const updateAddress = async (payload, addressId) => {
  const url = BASE_URL + `/address/${addressId}`;
  try {
    const { data } = await fetch.patch(url, payload);
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

export const deleteAddress = async (addressId) => {
  const url = BASE_URL + `/address/${addressId}`;
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
