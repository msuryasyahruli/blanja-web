import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../actions/orderAction";

export const useOrder = (id) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.order);

  useEffect(() => {
    dispatch(fetchOrder(id));
    // eslint-disable-next-line
  }, [id]);

  return {
    isLoading: loading,
    data: data || [],
    isError: error,
  };
};
