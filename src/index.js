import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { Provider } from "react-redux";
import store from "./config/redux/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider> 
);
