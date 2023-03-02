
import './BurgerMenu.scss'
import {useEffect, useRef, useState} from "react";
import Nav from "../Nav/Nav";

const BurgerMenu = () => {
    const ref = useRef(null)
    const refButton = useRef(null)

    const [isOpen, setIsOpen] = useState(false)
    const [isOpening, setIsOpening] = useState(false)

    const burgerMenuIsOpenClass = 'open'

    const openMenu = (e) => {
        e.preventDefault()
        if (ref.current != null) {
            setIsOpen(prevState => !prevState)
        }
    }

    const closeMenu = (e) => {
        if (e.target === ref.current || e.target === refButton.current || e.target.localName === 'img') {
            setIsOpen(false)
        }
    }

    return (
        <>
            <div onClick={(e) => closeMenu(e)} ref={refButton} className={!isOpen ? 'burger__wrapper' : `burger__wrapper burger__wrapper--${burgerMenuIsOpenClass}`}>
                <div className={!isOpen ? 'burger__menu' : `burger__menu burger__menu--${burgerMenuIsOpenClass}`}>
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