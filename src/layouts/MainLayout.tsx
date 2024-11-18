import React, {useEffect, useState} from 'react';
import Context, {defaultValue} from "../context/Context";
import {userService} from "../services/api.dj.service";
import Menu from "../components/Menu";
import {Outlet} from "react-router-dom";
import {IUser} from "../models/IUser";

const MainLayout = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAllUsers().then((data:IUser[]) =>setUsers(data))
    }, []);

    const contextValue = {
        ...defaultValue,
        ...defaultValue.userSlice.allUsers = users
    };

    return (
        <div>
            <Menu/>
            <Context.Provider value={contextValue}>
            </Context.Provider>
            <Outlet/>
        </div>
    );
};

export default MainLayout;