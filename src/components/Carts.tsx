import React, {FC, useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {cartsService} from "../services/api.dummyjson.service";
import {ICart} from "../models/ICart";
import Cart from "./Cart";
import user from "./User";

type CartsProps = {
    setBtnSwitch: (value: boolean) => void
}

const Carts:FC<CartsProps> = ({setBtnSwitch}) => {
    const {userId} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    const [query] = useSearchParams({page: '1'})

    useEffect(() => {

        const page = query.get('page') || '1'
        if (userId) {
            cartsService.getCartsOfUser(userId, +page).then((data: { carts: ICart[]; flag: boolean; }) => {
                setCarts(data.carts)
                setBtnSwitch(data.flag)
            });
        }
    }, [userId, query]);

    return (
        <div>
            {carts.length> 0 ? (carts.map((cart: ICart) => <Cart key={cart.id} cart={cart}/>)) : (
                <div>Nothing</div>
            )}
        </div>
    );
};

export default Carts;