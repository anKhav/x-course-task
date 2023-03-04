
import {MyButton} from "../../components/UI/MyButton/MyButton";
import img from '../../images/user-svgrepo-com.svg'
import './Auth.scss'
import {useNavigate} from "react-router-dom";
import {useCallback, useContext, useState} from "react";
import debounce from 'lodash.debounce'
import {AuthFormValidator} from '../../validators/AuthFormValidator'
import {UserContext} from "../../features/context/UserContext";
import {LOGIN} from "../../features/actions";
import {hasWhiteSpace} from "../../utils/hasWhiteSpace";
import {BOOKS_ROUTE} from "../../utils/consts";




const Auth = () => {
    const [username, setUsername] = useState('')
    const {userDispatch} = useContext(UserContext)
    const [error, setError] = useState(false)


    const navigate = useNavigate()
    const isDisabled = AuthFormValidator(username)
    const login = async (e) => {
        e.preventDefault()
        const isNotCorrectUsername = hasWhiteSpace(username)
        setError(isNotCorrectUsername)
        if (!isNotCorrectUsername) {
            await userDispatch({ type: LOGIN, payload:{username:username}});
            navigate({
                pathname:BOOKS_ROUTE,
            })
        }
    }

    const changeHandler = (e) => {
        setUsername(e.target.value)
    }

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 500)
        , [isDisabled]);

    return (
        <section className='section-outer' data-testid='user'>
            <div className="section-inner auth">
                <div className="auth__avatar">
                    <img src={img} alt=""/>
                </div>
                <form className='auth__form'>
                    <label htmlFor="username">Username</label>
                    <input
                        className='input'
                        type="text"
                        id='username'
                        placeholder='type Username'
                        onChange={debouncedChangeHandler}
                    />
                    {error && <div className='not-allowed'>Username will not allow a space</div>}
                    <MyButton
                        disabled={isDisabled}
                        className='auth__button'
                        onClick={(e) => login(e)}
                    >
                        Sign In
                    </MyButton>
                </form>
            </div>
        </section>
    );
};

export default Auth;