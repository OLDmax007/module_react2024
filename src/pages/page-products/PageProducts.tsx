import React from 'react';
import Products from "../../components/products/Products";
import {Outlet} from "react-router-dom";

const PageProducts = () => {

    return (
        <div>
            <Products/>
            <Outlet/>
        </div>
    );
};

export default PageProducts;