import fetch, { BASE_URL } from "../../fetch";
import Toast from "../../toast";

export const fetchListProduct = (params) => async (dispatch) => {
  dispatch({ type: "LIST_PRODUCT_LOADING" });
  const url = BASE_URL + `/products`;
  try {
    const { data } = await fetch.get(url, { params });
    dispatch({
      type: "LIST_PRODUCT",
      payload: data.data,
      meta: data.pagination,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "LIST_PRODUCT_ERROR", payload: error.message });
  }
};

export const fetchDetailProduct = (id) => async (dispatch) => {
  dispatch({ type: "DETAIL_PRODUCT_LOADING" });
  const url = BASE_URL + `/products/${id}`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "DETAIL_PRODUCT",
      payload: data.data,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "DETAIL_PRODUCT_ERROR", payload: error.message });
  }
};

export const fetchSearchProduct = (params) => async (dispatch) => {
  dispatch({ type: "SEARCH_PRODUCT_LOADING" });
  const url = BASE_URL + `/products/seacrh`;
  try {
    const { data } = await fetch.get(url, { params });
    dispatch({
      type: "SEARCH_PRODUCT",
      payload: data.data,
      meta: data.pagination,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "SEARCH_PRODUCT_ERROR", payload: error.message });
  }
};

export const fetchSellerProduct = (id) => async (dispatch) => {
  dispatch({ type: "SELLER_PRODUCT_LOADING" });
  const url = BASE_URL + `/products/seller/${id}`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "SELLER_PRODUCT",
      payload: data.data,
      meta: data.pagination,
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.message,
    });
    dispatch({ type: "SELLER_PRODUCT_ERROR", payload: error.message });
  }
};

export const fetchPostProduct = async (payload) => {
  const url = BASE_URL + `/products`;
  try {
    const { data } = await fetch.post(url, payload, { isFormData: true });
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

export const fetchPatchProduct = async (payload, id) => {
  const url = BASE_URL + `/products/${id}`;
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

export const fetchDeleteProduct = async (id) => {
  const url = BASE_URL + `/products/${id}`;
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
