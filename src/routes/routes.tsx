import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AuthResourcesPage from "../pages/AuthResourcesPage";



const routes = createBrowserRouter([
    {path:'', element:<MainLayout/>, children: [
            {path:'/', element:<HomePage/>},
            {path:'login', element: <LoginPage/>},
            {path:'auth/resources', element:<AuthResourcesPage/>},
        ]}
]);

export default routes;