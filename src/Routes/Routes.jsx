import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
// import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/sign-up',
            element: <SignUp></SignUp>
        },
        {
            path: '/checkOut/:id',
            element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
            loader: ({params})=> fetch(`https://car-doctor-sever-main.vercel.app/services/${params.id}`)
        },
        {
            path: '/bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;