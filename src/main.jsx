// index.js or index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../redux-toolkit/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <Toaster/>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
