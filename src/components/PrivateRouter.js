import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { username, password} = useSelector((state) => state.auth.user )

  return username && password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
