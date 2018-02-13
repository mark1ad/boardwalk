import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Store from "./Store";

// TODO: set url
let baseURL;
if (window.location.host === "localhost:3001") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://boardwalk-api.herokuapp.com";
}
global.axiosInstance = axios.create({
  baseURL: baseURL
});

export const store = Store();
global.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
registerServiceWorker();
