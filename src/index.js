import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserRegister from "./login/UserRegister";
import reportWebVitals from "./reportWebVitals";
import UserLogin from "./login/UserLogin";
import HomePage from "./inside/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserProvider";
import UserProfile from "./inside/UserProfile";
import RecipeList from "./inside/RecipeList";import DisplayRecipe from "./inside/DisplayRecipe";
import EditRecipe from "./inside/EditRecipe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UserRegister /> */}
    {/* <UserLogin /> */}
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/" element={<UserLogin />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/DisplayRecipe" element={<DisplayRecipe />} />
          <Route path="/EditRecipe" element={<EditRecipe />} />
          <Route path="/recipelist" element={<RecipeList />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
