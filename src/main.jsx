import { BrowserRouter } from "react-router-dom";
import { store } from "./app.store";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </Provider>
);
