import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import addressReducer from "./addressReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  user: userReducer,
  address: addressReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;
