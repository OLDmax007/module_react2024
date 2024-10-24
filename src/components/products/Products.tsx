import React, {useEffect, useState} from 'react';
import {productsService} from "../../services/api.products.service";
import {IProduct} from "../../models/IProduct";
import Product from "../product/Product";

const Products = () => {
    // const params = useParams()
    // console.log(params)
    // console.log(1)


    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        productsService.getProducts().then((data:IProduct[]) => {
            setProducts(data)
        })
    }, []);

    return (
        <div>
            {products.map((product:IProduct) => (
                    <Product key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Products;
