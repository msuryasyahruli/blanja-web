import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../actions/addressAction";

export const useAddress = (id, refetchKey) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.address);

  useEffect(() => {
    dispatch(fetchAddress(id));
    // eslint-disable-next-line
  }, [id, refetchKey]);

  return {
    isLoading: loading,
    data: data || [],
    isError: error,
  };
};
