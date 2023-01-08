import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import CustomCursorManager from "./components/CustomCursor/context/manager";
import App from "./App";
import './main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomCursorManager>
    <CustomCursor />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
    </CustomCursorManager>
  </React.StrictMode>
);
