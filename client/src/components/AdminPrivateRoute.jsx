import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser?.data.isAdmin ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AdminPrivateRoute;
