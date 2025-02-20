import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../actions/cartAction";

export const useCart = (id, refetchKey) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.cart);

  useEffect(() => {
    dispatch(fetchCart(id));
    // eslint-disable-next-line
  }, [id, refetchKey]);

  return {
    isLoading: loading,
    data: data || [],
    isError: error,
  };
};
