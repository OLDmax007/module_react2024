import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import CartsPage from "../pages/CartsPage";

export const router = createBrowserRouter(
    [
        {path:'/', element: <MainLayout/>, children: [
                {index:true, element:<HomePage/>},
                {path:'users', element: <UsersPage/>},
                {path:'users/:id', element: <CartsPage/>}
            ], errorElement: <ErrorLayout/>}

    ]
)