
import {MyButton} from "../UI/MyButton/MyButton";
import img from '../../images/shopping-cart-icon.svg'
import './Nav.scss'
import {CART_ROUTE} from "../../helpers/consts";
import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../../features/context/UserContext";
import {CLEAR__CART, LOGOUT} from "../../features/actions";
import {CartContext} from "../../features/context/CartContext";
import {useContext, useEffect, useState} from "react";
import CartIcon from "./CartIcon/CartIcon";

const Nav = () => {
    const {user:{username}, userDispatch} = useContext(UserContext)
    const {cartDispatch} = useContext(CartContext)

    const navigate = useNavigate()

    const logout = async (e) => {
        e.preventDefault()
        await userDispatch({type: LOGOUT})
        await cartDispatch({type:CLEAR__CART})
        navigate('/')
    }

    return (
        <nav className='nav'>
            <CartIcon/>
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