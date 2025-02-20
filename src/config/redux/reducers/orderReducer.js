const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_ORDER_LOADING":
        return { ...state, loading: true };
  
      case "GET_ORDER":
        return { ...state, data: payload, loading: false };
  
      case "GET_ORDER_FAILED":
        return { ...state, error: payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default orderReducer;
  