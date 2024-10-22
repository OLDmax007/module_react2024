import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageDogs from "../pages/page_dogs/PageDogs";
import PageCats from "../pages/page_cats/PageCats";
import HomePage from "../pages/page_home/HomePage";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {
                index: true, element: <HomePage/>
            },

            {
                path: 'dogs', element: <PageDogs/>
            },
            {
                path: 'cats', element: <PageCats/>
            }
        ], }

])
