import React, {FC} from 'react';
import {apiProducts} from "./dataProducts";
import {IProduct} from '../../models/IProduct'
import Product from "../Product/Product";

const Products: FC = () => {
    const products: IProduct[] = apiProducts.products;
    return (
        <div>
            <div>
                {products.map((product: IProduct) => (
                    <Product
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                        rating={product.rating}
                        stock={product.stock}
                        tags={product.tags}
                        brand={product.brand}
                        sku={product.sku}
                        weight={product.weight}
                        dimensions={product.dimensions}
                        warrantyInformation={product.warrantyInformation}
                        shippingInformation={product.shippingInformation}
                        availabilityStatus={product.availabilityStatus}
                        reviews={product.reviews}
                        returnPolicy={product.returnPolicy}
                        minimumOrderQuantity={product.minimumOrderQuantity}
                        // meta={product.meta}
                        thumbnail={product.thumbnail}
                    />
                    ))}
            </div>
        </div>
    );
};

export default Products;