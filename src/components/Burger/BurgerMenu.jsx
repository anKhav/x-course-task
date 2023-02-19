
import './BurgerMenu.scss'
import {useRef, useState} from "react";
import Nav from "../Nav/Nav";

const BurgerMenu = () => {
    const ref = useRef(null)
    const refButton = useRef(null)

    const [isOpen, setIsOpen] = useState(false)
    const [isOpening, setIsOpening] = useState(false)

    const burgerMenuIsOpenClass = 'burger__wrapper--open'

    const openMenu = (e) => {
        e.preventDefault()
        if (ref.current != null) {
            setIsOpening(prevState => !prevState)
            setIsOpen(prevState => !prevState)
        }
    }

    const closeMenu = (e) => {
        if (e.target === ref.current || e.target === refButton.current) {
            setIsOpen(false)
            setIsOpening(false)
        }
    }

    return (
        <>
            <div onClick={(e) => closeMenu(e)} ref={refButton} className={!isOpening ? 'burger__wrapper' : `burger__wrapper ${burgerMenuIsOpenClass}`}>
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