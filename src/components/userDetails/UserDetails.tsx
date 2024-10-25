import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {
    const {state:user} = useLocation()
    const {id, address, phone, website} = user


    return (
        <div>
            <p>
              User: {id} {address.zipcode} {phone} {website}
            </p>
        </div>
    );
};

export default UserDetails;