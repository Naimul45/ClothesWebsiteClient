import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import ProductOfShop from "../../ProductOfShop/ProductOfShop";
import AllProducts from "../AllProducts/AllProducts";
import AllShops from "../AllShops/AllShops";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import DetailsProduct from "../Products/DetailsProduct";
import Signup from "../Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allshops",
        element: <AllShops></AllShops>,
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/shop/:id",
        element: <ProductOfShop></ProductOfShop>,
        loader: async ({ params }) =>
          fetch(`https://camera-shop-server.vercel.app/shop/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/especificprod/:id",
        element: <DetailsProduct></DetailsProduct>,
        loader: async ({ params }) =>
          fetch(
            `https://camera-shop-server.vercel.app/especificprod/${params.id}`
          ),
      },
      {
        path: "/especificproduct/:id",
        element: <DetailsProduct></DetailsProduct>,
        loader: async ({ params }) =>
          fetch(
            `https://camera-shop-server.vercel.app/especificproduct/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
