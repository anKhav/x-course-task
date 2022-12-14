import React from 'react';
import './Header.scss'
import RightNav from "../RightNsv/RightNav";
import {Link} from "react-router-dom";

const Header = ({className}) => {
    return (
        <header className={'header'}>
            <div className='header__logo section-outer'>
                <Link className='logo' to='/books'>
                    JS Band store / Anton Khavaldzhi
                </Link>
            </div>
            <RightNav/>
        </header>
    );
};

export default Header;