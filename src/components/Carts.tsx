import React, {FC, useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {cartsService} from "../services/api.dummyjson.service";
import {ICart} from "../models/ICart";
import Cart from "./Cart";

type CartsProps = {
    setBtnSwitch: () => void
}

const Carts:FC<CartsProps> = ({setBtnSwitch}) => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    const [query] = useSearchParams({page: '1'})

    useEffect(() => {

        const page = query.get('page') || '1'
        if (id) {
            cartsService.getAll(id, +page).then((data: { carts: ICart[]; flag: boolean; }) => {
                setCarts(data.carts)
            });
        }
    }, [id, query]);

    return (
        <div>
            {carts.map((cart: ICart) => <Cart key={cart.id} cart={cart}/>)}
        </div>
    );
};

export default Carts;