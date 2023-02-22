
import {MyButton} from "../UI/MyButton/MyButton";
import './Nav.scss'
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../features/context/UserContext";
import {CLEAR__CART, LOGOUT} from "../../features/actions";
import {CartContext} from "../../features/context/CartContext";
import {useContext} from "react";
import CartIcon from "./CartIcon/CartIcon";
import {INDEX_ROUTE} from "../../utils/consts";

const Nav = () => {
    const {user:{username}, userDispatch} = useContext(UserContext)
    const {cartDispatch} = useContext(CartContext)

    const navigate = useNavigate()

    const logout = async (e) => {
        e.preventDefault()
        await userDispatch({type: LOGOUT})
        await cartDispatch({type:CLEAR__CART})
        navigate(INDEX_ROUTE)
    }

    return (
        <nav className='nav'>
            <CartIcon/>
            <MyButton onClick={(e) => logout(e)}>
                Sign-Out
            </MyButton>
            <div className="avatar">
            </div>
            <span className='username'>{username}</span>
        </nav>
    );
};

export default Nav;