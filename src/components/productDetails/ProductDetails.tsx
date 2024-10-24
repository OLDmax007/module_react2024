import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {productsService} from "../../services/api.products.service";
import {IProduct} from "../../models/IProduct";


const ProductDetails: FC = () => {
    const [product, setProduct] = useState<IProduct | null>(null)

    const {id} = useParams()


    useEffect(() => {
        if (id) {
            productsService.getProduct(id).then((data: IProduct) => {
                setProduct(data)
            })
        }
    }, [id]);

    return (
        <div>
            {JSON.stringify(product)}
        </div>
    );
};

export default ProductDetails;