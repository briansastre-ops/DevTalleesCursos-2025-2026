//Spa ==>  Single page application

import { appRouter } from "./router/app.router";
import { RouterProvider } from "react-router";
import { userContextProvider } from "./Context/userContext";

export const ProfessionalApp = () => {
  return (
    <userContextProvider>
      <div className="bg-gradient ">
        <RouterProvider router={appRouter} />
      </div>
    </userContextProvider>
  );
};
