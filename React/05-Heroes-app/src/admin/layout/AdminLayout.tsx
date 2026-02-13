import React from "react";
import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="bg-blue-500">
      <h1 className=""> Hola Mundo</h1>

      <Outlet />
    </div>
  );
};
