import { RouterProvider } from "react-router";
import { AppRouter } from "./Router/app.routes";

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};
