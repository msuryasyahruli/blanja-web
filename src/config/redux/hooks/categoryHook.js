import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../actions/categoryAction";

export const useCategories = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.category);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);

  return {
    isLoading: loading,
    data: data || [],
    isError: error
  };
};
