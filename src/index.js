import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserRegister from "./login/UserRegister";
import reportWebVitals from "./reportWebVitals";
import UserLogin from "./login/UserLogin";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UserRegister /> */}
    {/* <UserLogin /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
