import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct';
interface IProductProps {
    prod: IProduct
}

const Product: FC<IProductProps> = ({prod}) => {

    return (
        <div className='product'>
            <p>{prod.title}</p>
            <p>{prod.price}</p>
        </div>
    );
};

export default Product;