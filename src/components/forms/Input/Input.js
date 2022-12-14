import React from 'react';
import './Input.scss'

const Input = ({className}) => {
    return (
        <div className='input__wrapper'>
            <label className='input__label' htmlFor="username">Username</label>
            <input className={`input ${className}`} type="text" name='username' placeholder='type Username'/>
        </div>
    );
};

export default Input;