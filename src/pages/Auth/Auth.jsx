
import {MyButton} from "../../components/UI/MyButton/MyButton";
import img from '../../images/user-svgrepo-com.svg'
import './Auth.scss'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {AuthFormValidator} from '../../validators/AuthFormValidator'
import {LOGIN} from "../../features/actions";
import {hasWhiteSpace} from "../../utils/hasWhiteSpace";
import {BOOKS_ROUTE} from "../../utils/consts";
import {useUser} from "../../hooks/useUser";
import {GoogleLogin} from "@react-oauth/google";
import jwtDecode from "jwt-decode";




const Auth = () => {
    const [username, setUsername] = useState('')
    const {userDispatch} = useUser()
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
    const responseGoogle = async (response) => {
        const token = response.credential
        const userInfo = jwtDecode(token)
        await userDispatch({ type: LOGIN, payload:{username:userInfo.name, avatar:userInfo.picture}});
    }

    return (
        <section className='section-outer' data-testid='user'>
            <div className="section-inner auth">
                <div className="auth__avatar">
                    <img src={img} alt="Avatar iconT"/>
                </div>
                <form className='auth__form'>
                    <label htmlFor="username">Username</label>
                    <input
                        className='input'
                        type="text"
                        id='username'
                        placeholder='type Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {error && <div className='not-allowed'>Username will not allow a space</div>}
                    <div className='socials-auth'>
                        <h3 className='socials-auth__title'>Login with:</h3>
                        <ul>
                            <li>
                                <GoogleLogin
                                    type="icon"
                                    render={(renderProps) => (
                                        <button
                                            className=""
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                        >
                                        </button>
                                    )}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy="single_host_origin"
                                />
                            </li>
                        </ul>
                    </div>
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