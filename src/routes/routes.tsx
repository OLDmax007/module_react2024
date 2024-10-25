import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";
import CommentsPage from "../pages/commnetsPage/CommentsPage";
import PostsPage from "../pages/postsPage/PostsPage";
import UsersPage from "../pages/usersPage/UsersPage";
import HomePage from "../pages/homePage/HomePage";
import UserDetails from "../components/userDetails/UserDetails";

export const routes = createBrowserRouter(
    [
        {
            path: '/', element: <MainLayout/>, children: [
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersPage/>},
                {path:'users/:id', element:<UserDetails/>},
                {path: 'posts', element: <PostsPage/>},
                {path: 'comments', element: <CommentsPage/>}
            ], errorElement: <ErrorLayout/>
        },

    ]
)