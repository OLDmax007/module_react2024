import React, {useState} from 'react';
import Carts from "../components/Carts";
import Pagination from "../components/Pagination";

const CartsPage = () => {
    const [btnSwitch, setBtnSwitch] = useState<boolean>(false)


    return (
        <div>
            <Carts/>
            <Pagination setBtnSwitch={setBtnSwitch()}/>
        </div>
    );
};

export default CartsPage;