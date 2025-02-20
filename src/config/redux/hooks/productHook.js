import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailProduct,
  fetchListProduct,
  fetchSearchProduct,
  fetchSellerProduct,
} from "../actions/productAction";
import { useEffect } from "react";

export const useProducts = (params, refetchKey) => {
  const dispatch = useDispatch();
  const { data, pagination, loading, error } = useSelector(
    (s) => s.product.listProduct
  );

  useEffect(() => {
    dispatch(fetchListProduct(params));
    // eslint-disable-next-line
  }, [JSON.stringify(params), refetchKey]);

  return {
    isLoading: loading,
    data: data || [],
    pagination,
    isError: error,
  };
};

export const useDetailProduct = (productId) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.product.detailProduct);

  useEffect(() => {
    dispatch(fetchDetailProduct(productId));
    // eslint-disable-next-line
  }, [productId]);

  return {
    isLoading: loading,
    data: data || [],
    isError: error,
  };
};

export const useSearchProduct = (params) => {
  const dispatch = useDispatch();
  const { data, pagination, loading, error } = useSelector(
    (s) => s.product.searchProduct
  );

  useEffect(() => {
    dispatch(fetchSearchProduct(params));
    // eslint-disable-next-line
  }, [JSON.stringify(params)]);

  return {
    isLoading: loading,
    data: data || [],
    pagination,
    isError: error,
  };
};

export const useSellerProduct = (userId, refetchKey) => {
  const dispatch = useDispatch();
  const { data, pagination, loading, error } = useSelector(
    (s) => s.product.sellerProduct
  );

  useEffect(() => {
    dispatch(fetchSellerProduct(userId));
    // eslint-disable-next-line
  }, [userId, refetchKey]);

  return {
    isLoading: loading,
    data: data || [],
    pagination,
    isError: error,
  };
};
