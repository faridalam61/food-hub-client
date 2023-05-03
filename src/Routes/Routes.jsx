import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Recipies from "../Pages/Recipies";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog";
import Favourite from "../Pages/Favourite";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://food-hub-server-faridalam61.vercel.app/chefs"),
      },
      {
        path: "recipies/:id",
        element: (
          <PrivateRoute>
            <Recipies />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-hub-server-faridalam61.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
    ],
  },
]);

export default router;
