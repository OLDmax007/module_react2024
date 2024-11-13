import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TodosPage from "../pages/TodosPage";

export const router = createBrowserRouter(
    [
        {path:'/', element: <MainLayout/>, errorElement: '', children: [
                {index: true, element: <HomePage/>},
                {path: 'login', element: <LoginPage/>},
                {path: 'todos', element: <TodosPage/>}
            ]}

    ]
)