import React from 'react';
import './Right-nav.scss'
import cart from '../../../assest/images/system/cart.svg'
import avatar from '../../../assest/images/system/avatar.png'
import Button from "../../buttons/button/Button";
import {Link} from "react-router-dom";
import {CART_ROUTE} from "../../../utils/constants/consts";

const RightNav = () => {
    return (
        <nav className='right-nav'>
            <Link to={CART_ROUTE}><img src={cart} alt="Cart icon" className="cart"/></Link>
            <Button>Sign Out</Button>
            <div className="user">
                <img src={avatar} alt="User avatar" className="user__icon"/>
                <span className='user__name'>khavaldzhi_a</span>
            </div>
        </nav>
    );
};

export default RightNav;