import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* we wrap the app component to the provider  for react-redux liderary 
    which provides the React components with access to the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

