const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const addressReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_ADDRESS_LOADING":
        return { ...state, loading: true };
  
      case "GET_ADDRESS":
        return { ...state, data: payload, loading: false };
  
      case "GET_ADDRESS_FAILED":
        return { ...state, error: payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default addressReducer;
  