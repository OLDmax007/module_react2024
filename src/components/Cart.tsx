import React, {FC} from 'react';
import {ICart} from "../models/ICart";
import {IProduct} from "../models/IProduct";
type CartProps = {
    cart: ICart
}

const Cart:FC<CartProps> = ({cart}) => {
    return (
        <div>
            UserId: {cart.userId} Total: {cart.total}
            <ul>
                {cart.products.map((product: IProduct) => <li>{product.title}</li>)}
            </ul>
        </div>
    );
};

export default Cart;