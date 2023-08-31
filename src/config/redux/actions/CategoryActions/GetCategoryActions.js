import axios from "axios";

const GetCategoryActions = () => async (dispatch) => {
  try {
    const category = await axios.get(
      `${process.env.REACT_APP_API_KEY}/category`
    );
    const result = category.data.data;
    dispatch({ type: "GET_ALL_CATEGORY", payload: result });
  } catch (error) {
    console.log(error);
  }
};

export default GetCategoryActions;
