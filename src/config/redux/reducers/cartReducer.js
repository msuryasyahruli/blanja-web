const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_CART_LOADING":
        return { ...state, loading: true };
  
      case "GET_CART":
        return { ...state, data: payload, loading: false };
  
      case "GET_CART_FAILED":
        return { ...state, error: payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  