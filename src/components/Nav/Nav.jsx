import * as React from 'react';
import MyButton from "../UI/MyButton/MyButton";
// @ts-ignore
import img from '../../images/shopping-cart-icon.svg'
import './Nav.scss'
import {getUser} from "../../services/UserService";
import {CART_ROUTE} from "../../helpers/consts";
import {Link, useNavigate} from "react-router-dom";
import {useUser} from "../../features/context/UserContext";
import {type} from "@testing-library/user-event/dist/type";

const Nav = () => {
    const {user:{username}, userDispatch} = useUser()
    const navigate = useNavigate()

    const logout = async (e) => {
        e.preventDefault()
        await userDispatch({type: 'logout'})
        navigate('/')
    }

    return (
        <nav className='nav'>
            <Link to={CART_ROUTE} className='cart__icon'>
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