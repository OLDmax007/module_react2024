import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {cartsService} from "../services/api.dummyjson.service";
import {ICart} from "../models/ICart";

const Carts = () => {
    const { id } = useParams();

    useEffect(() => {

        cartsService.getAll('1').then((data: ICart[]) => {
            console.log(data);
        });
    }, [id]);

    return (
        <div>
            
        </div>
    );
};

export default Carts;