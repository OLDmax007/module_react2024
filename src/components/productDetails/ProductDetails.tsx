import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {productsService} from "../../services/api.products.service";
import {IProduct} from "../../models/IProduct";


const ProductDetails: FC = () => {

    const {state} = useLocation();
    const product:IProduct = state;


    return (
        <div>
            {JSON.stringify(product)}
        </div>
    );
};

export default ProductDetails;