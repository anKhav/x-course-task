import React from 'react';
import './Authorization.scss'
import Input from "../../components/forms/Input/Input";
import avatar from '../../assest/images/system/avatar.png'
import Button from "../../components/buttons/button/Button";
import {useDispatch} from "react-redux";
import {getUser} from "../../features/User/userSlice";
import {useNavigate} from "react-router-dom";

const Authorization = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logInHandler = async (e) => {
        e.preventDefault()
        await dispatch(getUser())
        navigate(`../books`)
    }

    return (
        <section className='authorization'>
            <div className='authorization__content section-outer'>
                <img className='avatar' src={avatar} alt="User avatar"/>
                <form action="/" className='authorization__form'>
                    <Input className='authorization__input'/>
                    <Button onClick={(e) => logInHandler(e)} type='submit' className='authorization__button'>Sign In</Button>
                </form>
            </div>
        </section>
    );
};

export default Authorization;