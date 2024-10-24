import React from 'react';
import ProductDetails from "../../components/productDetails/ProductDetails";
import {Outlet} from "react-router-dom";

const PageProductDetails = () => {
    return (
        <div>
            <h3>Details about product</h3>
            <ProductDetails></ProductDetails>
            <Outlet/>
        </div>
    );
};

export default PageProductDetails;