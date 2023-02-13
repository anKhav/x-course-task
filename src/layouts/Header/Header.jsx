import * as React from 'react';
import './Header.scss'
import {useContext, useEffect, useState} from "react";
import Nav from "../../components/Nav/Nav";
import BurgerMenu from "../../components/Burger/BurgerMenu";
import {Link} from "react-router-dom";
import {isLoginContext} from "../../App";
import {getUser} from "../../services/UserService";
import {useUser} from "../../features/context/UserContext";

const Header = ({title, authorName}) => {
    const {user} = useUser()
    console.log(user);
    const getWindowSize = () => {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <header className='header'>
            <h1>
                <span>{title}</span> /
                <span>{authorName}</span>
            </h1>
            {
                Object.keys(user).length !== 0 ? <div>{windowSize.innerWidth > 768 ? <Nav/> : <BurgerMenu/>}</div> : <div></div>
            }
            {/*<Nav/>*/}
            {/*<BurgerMenu/>*/}
        </header>
    );
};

export default Header;