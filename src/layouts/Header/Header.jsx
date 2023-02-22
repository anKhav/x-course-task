
import './Header.scss'
import {useContext} from "react";
import Nav from "../../components/Nav/Nav";
import BurgerMenu from "../../components/Burger/BurgerMenu";
import {Link} from "react-router-dom";
import {UserContext} from "../../features/context/UserContext";
import useWindowSize from "../../hooks/useWindowSize";

const Header = ({title, authorName}) => {
    const {user} = useContext(UserContext)
    const {innerWidth} = useWindowSize()

    return (
        <header className='header'>
            <Link to='/' className='header__logo'>
                <span>{title}</span> /
                <span>{authorName}</span>
            </Link>
            {
                Object.keys(user).length !== 0 ? <div>{innerWidth > 768 ? <Nav/> : <BurgerMenu/>}</div> : <div></div>
            }
        </header>
    );
};

export default Header;