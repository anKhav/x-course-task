import * as React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import img from '../../images/shopping-cart-icon.svg'
import './Nav.scss'
import {CART_ROUTE} from "../../helpers/consts";
import {Link, useNavigate} from "react-router-dom";
import {useUser} from "../../features/context/UserContext";
import {LOGOUT} from "../../features/actions";
import {useCartContext} from "../../features/context/CartContext";
import {useEffect, useState} from "react";

const Nav = () => {
    const {cart} = useCartContext()
    console.log(cart);

    const [amount, setAmount] = useState(cart)
    useEffect(() => {
        setAmount(cart.totalAmount)
    }, [])

    const {user:{username}, userDispatch} = useUser()
    const navigate = useNavigate()

    const logout = async (e) => {
        e.preventDefault()
        await userDispatch({type: LOGOUT})
        navigate('/')
    }

    return (
        <nav className='nav'>
            <Link to={CART_ROUTE} className='cart__icon'>
                {
                    amount !== 0 ?
                        <div className="amount">{cart.totalAmount}</div> :
                        <div></div>
                }
                <img src={img} alt="Cart icon"/>
            </Link>
            <MyButton onClick={(e) => logout(e)}>
                Sign-Out
            </MyButton>
            <div className="avatar">
            </div>
            <span className='username'>{username}</span>
        </nav>
    );
};

export default Nav;