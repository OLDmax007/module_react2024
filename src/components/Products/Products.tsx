import React, {FC} from 'react';
import {apiProducts} from './dataProducts';
import {IProduct} from '../../models/IProduct'
import Product from '../Product/Product';
import './Products.css'

const Products: FC = () => {
    const products: IProduct[] = apiProducts.products;
    console.log(products[0])
    return (
        <div className='products'>
            {products.map((product: IProduct) => (
                // <Product
                //     id={product.id}
                //     title={product.title}
                //     description={product.description}
                //     category={product.category}
                //     price={product.price}
                //     discountPercentage={product.discountPercentage}
                //     rating={product.rating}
                //     stock={product.stock}
                //     tags={product.tags}
                //     brand={product.brand}
                //     sku={product.sku}
                //     weight={product.weight}
                //     dimensions={product.dimensions}
                //     warrantyInformation={product.warrantyInformation}
                //     shippingInformation={product.shippingInformation}
                //     availabilityStatus={product.availabilityStatus}
                //     reviews={product.reviews}
                //     returnPolicy={product.returnPolicy}
                //     minimumOrderQuantity={product.minimumOrderQuantity}
                //     // meta={product.meta}
                //     thumbnail={product.thumbnail}
                // />
                <Product {...product}></Product>
            ))}
        </div>
    );
};

export default Products;