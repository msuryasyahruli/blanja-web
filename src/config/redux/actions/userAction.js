import fetch, { BASE_URL } from "../../fetch";
import { clearStorage } from "../../storage";
import Toast from "../../toast";

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_USER_LOADING" });
    const url = BASE_URL + `/users/profile`;

    try {
      const { data } = await fetch.get(url);
      if (data.statusCode === 200) {
        dispatch({ type: "GET_USER", payload: data.data });
      } else if (data.message !== "server need token") {
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    } catch (error) {
      dispatch({ type: "GET_USER_FAILED", payload: error.message });
      Toast.fire({
        icon: "error",
        title: error.response.data.message,
      });
      clearStorage();
    }
  };
};

export const login = async (payload) => {
  const url = BASE_URL + "/users/login";
  try {
    const { data } = await fetch.post(url, payload);
    if (data.statusCode === 201) {
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } else {
      Toast.fire({
        icon: "warning",
        title: data.message,
      });
    }
    return data;
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "Server error!",
    });
    throw error;
  }
};

export const register = async (payload) => {
  const url = BASE_URL + "/users/register";
  try {
    const { data } = await fetch.post(url, payload);
    if (data.statusCode === 201) {
      Toast.fire({
        icon: "success",
        title: "Registration Successful",
      });
    } else {
      Toast.fire({
        icon: "warning",
        title: data.message,
      });
    }
    return data;
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "Server error!",
    });
    throw error;
  }
};

export const updateUser = async (payload, id) => {
  const url = BASE_URL + `/users/${id}`;
  try {
    const { data } = await fetch.patch(url, payload, { isFormData: true });
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

export const deleteProfilePicture = async (id) => {
  const url = BASE_URL + `/users/${id}/picture`;
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
