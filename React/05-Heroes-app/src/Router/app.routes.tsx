import { createBrowserRouter } from "react-router";
import { HeroPages } from "../hero/pages/hero/HeroPages";
import { SearchPage } from "../hero/pages/search/SearchPage";
import { HomePage } from "../hero/pages/home/HomePage";
import AdminPage from "../admin/pages/AdminPage";
import { HeroesLayout } from "../hero/layouts/HeroesLayout";
import { AdminLayout } from "../admin/layout/AdminLayout";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />, // Layout principal para las rutas de héroes
    children: [
      {
        path: "", // O "index: true"
        element: <HomePage />,
      },
      {
        path: "heroes/1", // Ruta específica para un héroe, por ejemplo, con ID 1
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Layout para las rutas de administración
    children: [
      {
        path: "",
        element: <AdminPage />,
      },
    ],
  },
]);
