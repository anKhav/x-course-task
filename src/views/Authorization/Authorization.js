import React from 'react';
import './Authorization.scss'
import Header from "../../components/layout/Header/Header";
import Input from "../../components/forms/Input/Input";
import avatar from '../../assest/images/system/avatar.png'
import Button from "../../components/buttons/button/Button";

const Authorization = () => {
    return (
        <section className='authorization'>
            <div className='authorization__content section-outer'>
                <img className='avatar' src={avatar} alt="User avatar"/>
                <form action="/" className='authorization__form'>
                    <Input className='authorization__input'/>
                    <Button type='submit' className='authorization__button'>Sign In</Button>
                </form>
            </div>
        </section>
    );
};

export default Authorization;