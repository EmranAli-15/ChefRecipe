import { createBrowserRouter, } from "react-router-dom";
import Home from "../components/Home/Home";
import Prime from "../layout/Prime";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../components/Shared/ErrorPage";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefRecipe/:id',
                element: <PrivetRoute><ChefRecipe></ChefRecipe></PrivetRoute>,
                loader: ({ params }) => fetch(`https://chef-recipes-emranali-15.vercel.app/chefRecipe/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);
export default router;