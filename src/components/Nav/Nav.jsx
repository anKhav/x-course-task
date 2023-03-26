
import {MyButton} from "../UI/MyButton/MyButton";
import './Nav.scss'
import {useNavigate} from "react-router-dom";
import {CLEAR__CART, LOGOUT} from "../../features/actions";
import CartIcon from "./CartIcon/CartIcon";
import {INDEX_ROUTE} from "../../utils/consts";
import {useCart} from "../../hooks/useCart";
import {useUser} from "../../hooks/useUser";

const Nav = () => {
    const {user, userDispatch} = useUser()
    const {cartDispatch} = useCart()

    const navigate = useNavigate()


    const logout = async (e) => {
        e.preventDefault()
        await userDispatch({type: LOGOUT})
        await cartDispatch({type:CLEAR__CART})
        await localStorage.removeItem('books')
        navigate(INDEX_ROUTE)
    }

    return (
        <nav className='nav'>
            <CartIcon/>
            <MyButton onClick={(e) => logout(e)}>
                Sign-Out
            </MyButton>
            <div className="avatar">
                <img src={user.avatar} alt={user.username}/>
            </div>
            <span className='username'>{user.username}</span>
        </nav>
    );
};

export default Nav;