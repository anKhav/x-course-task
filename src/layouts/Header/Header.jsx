
import './Header.scss'
import Nav from "../../components/Nav/Nav";
import BurgerMenu from "../../components/Burger/BurgerMenu";
import {Link} from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import {useUser} from "../../hooks/useUser";

const Header = ({title, authorName}) => {
    const {user} = useUser()
    const {innerWidth} = useWindowSize()

    return (
        <header className='header'>
            <div className='section-outer header__wrapper'>
                <Link to='/' className='header__logo'>
                    <span>{title}</span> /
                    <span>{authorName}</span>
                </Link>
                {
                    Object.keys(user).length !== 0  ? <div>{innerWidth > 768 ? <Nav/> : <BurgerMenu/>}</div> : <div></div>
                }
            </div>
        </header>
    );
};

export default Header;