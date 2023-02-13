import * as React from 'react';
// @ts-ignore
import img from '../../images/shopping-cart-icon.svg'
import './BurgerMenu.scss'
import {useState} from "react";
import Nav from "../Nav/Nav";

const BurgerMenu = () => {
    const ref = React.useRef(null)
    const refButton = React.useRef(null)

    const burgerMenuIsOpenClass = 'burger__wrapper--open'
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = (e) => {
        e.preventDefault()
        if (ref.current != null) {
            setIsOpen(prevState => !prevState)
        }
    }

    const closeMenu = (e) => {
        if (e.target === ref.current || e.target === refButton.current) {
            setIsOpen(false)
            console.log(e.target)
        }
        console.log(ref);
    }

    return (
        <>
            <div onClick={(e) => closeMenu(e)} ref={refButton} className={!isOpen ? 'burger__wrapper' : `burger__wrapper ${burgerMenuIsOpenClass}`}>
                <div className="burger__menu">
                    <button onClick={(e) => closeMenu(e)} className="burger__button--to-close">
                        <div ref={ref}></div>
                    </button>
                    <Nav/>
                </div>
            </div>
            <button onClick={(e) => openMenu(e)} className="burger__button">
                <div></div>
            </button>
        </>
    );
};

export default BurgerMenu;