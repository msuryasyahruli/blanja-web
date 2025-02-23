import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/userAction";

export const useUser = (refetch) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((s) => s.user);

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line
  }, [refetch]);

  return {
    isLoading,
    data: data || [],
    isError,
    id: data.user_id,
  };
};
