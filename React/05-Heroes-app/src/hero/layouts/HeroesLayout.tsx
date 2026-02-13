import React from "react";
import { Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className="bg-red-500">
      <h1 className=""> Hola Mundo</h1>

      <Outlet />
    </div>
  );
};
