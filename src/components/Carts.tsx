import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {cartsService} from "../services/api.dummyjson.service";
import {ICart} from "../models/ICart";
import Cart from "./Cart";

const Carts = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    const [btnSwitch, setBtnSwitch] = useState<boolean>(false)
    const [query] = useSearchParams({page: '1'})

    useEffect(() => {

        const page = query.get('page') || '1'
        if (id) {
            cartsService.getAll(id, +page).then((data: { carts: ICart[]; flag: boolean; }) => {
                setCarts(data.carts)
                setBtnSwitch(data.flag)
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