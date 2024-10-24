import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct";
import {Link} from "react-router-dom";

export type ProductType = {
    product:IProduct
}

const Product:FC<ProductType> = ({product}) => {
    return (
        <div>
            <Link to={product.id.toString()}>{product.id}</Link>
        </div>
    );
};

export default Product;

