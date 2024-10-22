import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <h1>MAIN PAGE</h1>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;