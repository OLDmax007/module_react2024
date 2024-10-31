import React, {useState} from 'react';
import Carts from "../components/Carts";
import Pagination from "../components/Pagination";

const CartsPage = () => {
    const [btnSwitch, setBtnSwitch] = useState<boolean>(false)


    return (
        <div>
            <Carts setBtnSwitch={setBtnSwitch} />
            <Pagination btnSwitch={btnSwitch}/>
        </div>
    );
};

export default CartsPage;