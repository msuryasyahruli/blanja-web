const initialState = {
    category: [],
    categoryDetail: [],
  };
  
  const categoryReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_CATEGORY") {
      return {
        ...state,
        category: action.payload,
      };
    } else if (action.type === "GET_DETAIL_CATEGORY") {
      return {
        ...state,
        category: action.payload,
      };
    } else if (action.type === "CREATE_CATEGORY") {
      return state;
    } else if (action.type === "UPDATE_CATEGORY") {
      return state;
    } else if (action.type === "DELETE_CATEGORY") {
      return state;
    } else {
      return state;
    }
  };
  
  export default categoryReducer;
  