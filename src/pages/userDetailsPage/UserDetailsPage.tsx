import React from 'react';
import UserDetails from "../../components/userDetails/UserDetails";
import PostsOfUser from "../../components/PostsOfUser/PostsOfUser";

const UserDetailsPage = () => {
    return (
        <div>
            <UserDetails/>
            <PostsOfUser></PostsOfUser>
        </div>
    );
};

export default UserDetailsPage;