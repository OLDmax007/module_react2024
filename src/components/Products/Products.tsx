import React, {FC} from 'react';
import {products} from "./dataProducts";
import {IProduct} from '../../models/IProduct'

const Products:FC = () => {
    return (
        <div>
            {products.map((product: IProduct) => <p>{product.brand} {product.id}</p>)}
        </div>
    );
};

export default Products;