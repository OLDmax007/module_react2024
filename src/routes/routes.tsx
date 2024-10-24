import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageRecipes from "../pages/page-recipes/PageRecipes";
import PageProducts from "../pages/page-products/PageProducts";
import HomePage from "../pages/page-home/HomePage";
import ErrorLayout from "../layouts/ErrorLayout";
import PageProductDetails from "../pages/page-product-details/PageProductDetails";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                index: true, element: <HomePage/>
            },

            {
                path: 'products', element: <PageProducts/>, children: [
                    {path: ':id', element: <PageProductDetails/>}
                ]
            },

            // {path: 'products/:id', element: <PageProductDetails/>},

            {
                path: 'recipes', element: <PageRecipes/>
            }
        ],
        errorElement: <ErrorLayout/>
    },

])
