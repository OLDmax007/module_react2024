import React from 'react';
import {useLocation} from "react-router-dom";

const UserPage = () => {
    const loc = useLocation()
    console.log(loc.state);

    return (
        <div>
            
        </div>
    );
};

export default UserPage;