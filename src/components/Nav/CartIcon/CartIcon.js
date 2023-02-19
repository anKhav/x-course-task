import React, {useContext, useEffect, useState} from 'react';
import {CART_ROUTE} from "../../../helpers/consts";
import img from "../../../images/shopping-cart-icon.svg";
import {Link} from "react-router-dom";
import {CartContext} from "../../../features/context/CartContext";

const CartIcon = () => {
    const {cart:{totalAmount}} = useContext(CartContext)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        setAmount(totalAmount)
    }, [totalAmount])
    return (
        <Link to={CART_ROUTE} className='cart__icon'>
            {amount !== 0 ? <div className="amount">{amount}</div> : <div></div>}
            <img src={img} alt="Cart icon"/>
        </Link>
    );
};

export default CartIcon;