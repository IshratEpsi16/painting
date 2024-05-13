import Root from "../layouts/Root";
import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Errorpage/Errorpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/register",
                element: <Register></Register>

            },
            {
                path: "/error",
                element: <ErrorPage></ErrorPage>

            }
        ]
    },
]);
export default router