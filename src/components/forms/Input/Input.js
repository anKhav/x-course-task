import React from 'react';
import './Input.scss'

const Input = ({children, className, name, placeholder, label, onChange, value}) => {
    return (
            label ?
                <div className='input__wrapper'>
                    <label className='input__label' htmlFor="username">Username</label>
                    <input className={`input ${className}`} type="text" name={name} placeholder={placeholder} onChange={onChange} value={value}/>
                    {children}
                </div>
                :
                <div className='input__wrapper'>
                    <input className={`input ${className}`} type="text" name={name} placeholder={placeholder} onChange={onChange} value={value}/>
                    {children}
                </div>
    );
};

export default Input;