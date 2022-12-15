import React from 'react';
import './Header.scss'
import RightNav from "../RightNsv/RightNav";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = ({user}) => {
    const isLogged = useSelector(state => state.user.isLogged)

    return (
        <header className={'header'}>
            <div className='header__logo section-outer'>
                <Link className='logo' to='/books'>
                    JS Band store {isLogged ? <span>{` / ${user.name} ${user.surname}`}</span> : <span></span>}
                </Link>
            </div>
            <RightNav email={user.email}/>
        </header>
    );
};

export default Header;