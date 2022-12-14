import React from 'react';
import './Button.scss'

const Button = ({id, children, type, className, onClick, disabled}) => {
    return (
        <button disabled={disabled} id={id} type={type} className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;