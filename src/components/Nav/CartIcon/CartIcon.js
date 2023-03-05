import React, {useEffect, useState} from 'react';
import {CART_ROUTE} from "../../../utils/consts";
import {Link} from "react-router-dom";
import {useCart} from "../../../hooks/useCart";
import useWindowSize from "../../../hooks/useWindowSize";

const CartIcon = () => {
    const windowSize = useWindowSize()

    const {cart:{totalAmount}, cartRef, setCartPosition} = useCart()
    const [amount, setAmount] = useState(0)
    const cart = cartRef.current
    const cartPosition = cart && {x:cart.offsetLeft, y:cart.offsetTop}
    useEffect(() => {
        setCartPosition(cartPosition)

    }, [cart,windowSize])

    useEffect(() => {
        setAmount(totalAmount)
    }, [totalAmount])
    // console.log(cartPosition);
    return (
        <Link to={CART_ROUTE} className='cart__icon' ref={cartRef}>
            {amount !== 0 ? <div className="amount">{amount}</div> : <div></div>}
                <svg className='cart-svg' xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M55 64H9V17h46v47zm-44-2h42V19H11v43z"/><path d="M43 24h-2V11c0-4.962-4.038-9-9-9s-9 4.038-9 9v13h-2V11c0-6.065 4.935-11 11-11s11 4.935 11 11v13z"/></svg>
        </Link>
    );
};

export default CartIcon;