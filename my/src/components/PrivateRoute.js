import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

const PrivateRoute = ({ Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
