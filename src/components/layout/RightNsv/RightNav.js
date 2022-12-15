import React from 'react';
import './Right-nav.scss'
import cart from '../../../assest/images/system/cart.svg'
import avatar from '../../../assest/images/system/avatar.png'
import Button from "../../buttons/button/Button";
import {Link, useNavigate} from "react-router-dom";
import {CART_ROUTE} from "../../../utils/constants/consts";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../../features/User/userSlice";

const RightNav = ({email}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogged = useSelector(state => state.user.isLogged)

    const logOutHandler = (e) => {
        e.preventDefault()
        dispatch(logOut())
    }
    const logInHandler = (e) => {
        e.preventDefault()
        navigate('../')
    }

    return (
        <nav className='right-nav'>
            <Link to={CART_ROUTE} className='cart__link'><img src={cart} alt="Cart icon" className="cart"/></Link>
            {
                isLogged
                    ?
                    <Button onClick={(e) => logOutHandler(e)}>Sign Out</Button>
                    :
                    <Button onClick={(e) => logInHandler(e)}>Log in</Button>
            }
            <div className="user">
                <img src={avatar} alt="User avatar" className="user__icon"/>
                <span className='user__name'>{email}</span>
            </div>
        </nav>
    );
};

export default RightNav;