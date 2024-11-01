import React, {useState} from 'react';
import Users from "../components/Users";
import Pagination from "../components/Pagination";

const UsersPage = () => {
    const [btnSwitch, setBtnSwitch] = useState<boolean>(false)

    return (
        <div>
            <Pagination btnSwitch={btnSwitch}></Pagination>
            <Users setBtnSwitch={setBtnSwitch}/>
            </div>
    );
};

export default UsersPage;