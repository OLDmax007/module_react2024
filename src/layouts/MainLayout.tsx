import React from 'react';
import Context, {defaultValue} from "../context/Context";
import Menu from "../components/Menu";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Context.Provider value={defaultValue}>
                <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default MainLayout;