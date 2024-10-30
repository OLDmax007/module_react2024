import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/Menu";
import {cartsService, usersSerive} from "../services/api.dummyjson.service";

const MainLayout = () => {

    useEffect(() => {
        usersSerive.getAll()
        cartsService.getAll()
    }, []);


    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;