import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MenuHome from "../Pages/Menu/MenuHome/MenuHome";
import ShopHome from "../Pages/Shop/ShopHome/ShopHome";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <MenuHome></MenuHome>,
      },
      {
        path: "shop/:category",
        element: <ShopHome></ShopHome>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
