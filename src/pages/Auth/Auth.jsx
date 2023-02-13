import * as React from 'react';
import MyButton from "../../components/UI/MyButton/MyButton";
import img from '../../images/user-svgrepo-com.svg'
import './Auth.scss'
import {useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
import debounce from 'lodash.debounce'
import {AuthFormValidator} from '../../validators/AuthFormValidator'
import {useUser} from "../../features/context/UserContext";




const Auth = () => {
    const [username, setUsername] = useState('')
    const {userDispatch} = useUser()


    const navigate = useNavigate()
    const isDisabled = AuthFormValidator(username)
    const login = async (e) => {
        e.preventDefault()
        await userDispatch({ type: 'login', payload:{username:username}});
        navigate('/books')
    }
    const changeHandler = (e) => {
        setUsername(e.target.value)
    }

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 500)
        , [isDisabled]);
    return (
        <section className='section-outer'>
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
                        // value={username}
                        onChange={debouncedChangeHandler}
                    />
                    <MyButton
                        disabled={isDisabled}
                        // disabled={true}
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