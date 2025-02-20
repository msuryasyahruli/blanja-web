import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;