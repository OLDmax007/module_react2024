import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TodosPage from "../pages/TodosPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'todos', element: <TodosPage/>}
        ]
    },

])

export {router}