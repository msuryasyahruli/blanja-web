const initialState = {
  listProduct: {
    data: [],
    loading: false,
    error: false,
    pagination: [],
  },
  detailProduct: {
    data: [],
    loading: false,
    error: false,
  },
  searchProduct: {
    data: [],
    loading: false,
    error: false,
    pagination: [],
  },
  sellerProduct: {
    data: [],
    loading: false,
    error: false,
    pagination: [],
  },
};

const productReducer = (state = initialState, action) => {
  const { meta, type, payload } = action;
  switch (type) {
    // all products
    case "LIST_PRODUCT_LOADING": {
      return {
        ...state,
        listProduct: {
          loading: true,
        },
      };
    }

    case "LIST_PRODUCT": {
      return {
        ...state,
        listProduct: {
          data: payload,
          loading: false,
          pagination: meta,
        },
      };
    }

    case "LIST_PRODUCT_ERROR": {
      return {
        ...state,
        listProduct: {
          error: payload,
          loading: false,
        },
      };
    }

    // detail product
    case "DETAIL_PRODUCT_LOADING": {
      return {
        ...state,
        detailProduct: {
          loading: true,
        },
      };
    }

    case "DETAIL_PRODUCT": {
      return {
        ...state,
        detailProduct: {
          data: payload,
          loading: false,
        },
      };
    }

    case "DETAIL_PRODUCT_ERROR": {
      return {
        ...state,
        detailProduct: {
          error: payload,
          loading: false,
        },
      };
    }

    // search product
    case "SEARCH_PRODUCT_LOADING": {
      return {
        ...state,
        searchProduct: {
          loading: true,
        },
      };
    }

    case "SEARCH_PRODUCT": {
      return {
        ...state,
        searchProduct: {
          data: payload,
          loading: false,
          pagination: meta,
        },
      };
    }

    case "SEARCH_PRODUCT_ERROR": {
      return {
        ...state,
        searchProduct: {
          error: payload,
          loading: false,
        },
      };
    }

    // seller product
    case "SELLER_PRODUCT_LOADING": {
      return {
        ...state,
        sellerProduct: {
          loading: true,
        },
      };
    }

    case "SELLER_PRODUCT": {
      return {
        ...state,
        sellerProduct: {
          data: payload,
          loading: false,
          pagination: meta,
        },
      };
    }

    case "SELLER_PRODUCT_ERROR": {
      return {
        ...state,
        sellerProduct: {
          error: payload,
          loading: false,
        },
      };
    }

    default:
      return state;
  }
};

export default productReducer;
