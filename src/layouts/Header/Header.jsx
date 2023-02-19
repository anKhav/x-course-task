
import './Header.scss'
import {useContext, useEffect, useState} from "react";
import Nav from "../../components/Nav/Nav";
import BurgerMenu from "../../components/Burger/BurgerMenu";
import {Link} from "react-router-dom";
import {UserContext} from "../../features/context/UserContext";
import {CartContext} from "../../features/context/CartContext";

const Header = ({title, authorName}) => {
    const {user} = useContext(UserContext)

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
            <Link to='/books' className='header__logo'>
                <span>{title}</span> /
                <span>{authorName}</span>
            </Link>
            {
                Object.keys(user).length !== 0 ? <div>{windowSize.innerWidth > 768 ? <Nav/> : <BurgerMenu/>}</div> : <div></div>
            }
        </header>
    );
};

export default Header;