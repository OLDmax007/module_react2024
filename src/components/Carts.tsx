import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {cartsService} from "../services/api.dummyjson.service";
import {ICart} from "../models/ICart";
import {IUser} from "../models/IUser";
import User from "./User";
import Cart from "./Cart";

const Carts = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if (id) {
            cartsService.getAll(id).then((data: ICart[]) => {
                console.log(data);
                setCarts(data)
            });
        }
    }, [id]);

    return (
        <div>
            {carts.map((cart: ICart) => <Cart key={cart.id} cart={cart}/>)}
        </div>
    );
};

export default Carts;