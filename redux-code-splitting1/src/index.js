import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/index";
// import myLogger from "./myLogger/myLogger.js";
import ReduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ReduxThunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
