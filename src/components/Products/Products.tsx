import React, {FC} from 'react';
import {apiProducts} from './dataProducts';
import {IProduct} from '../../models/IProduct'
import Product from '../Product/Product';
import './Products.css'

const Products: FC = () => {
    const products: IProduct[] = apiProducts.products;
    return (
        <div className='products'>
            {products.map((product: IProduct) => (
                <Product prod={product}></Product>
            ))}
        </div>
    );
};

export default Products;