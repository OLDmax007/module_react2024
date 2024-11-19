import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import CommentsPage from "../pages/CommentsPage";
import PostsPage from "../pages/PostsPage";
import {createBrowserRouter} from "react-router-dom";
import PostsWithCommentsPage from "../pages/PostsWithCommentsPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'postsWithComments', element: <PostsWithCommentsPage/>},
        ], errorElement: ''
    }
]);

export default router