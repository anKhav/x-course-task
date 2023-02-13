import * as React from 'react';
import './MyButton.scss';

const MyButton  = ({children, onClick, id, className, disabled}) => {
    return (
        <button disabled={disabled} id={id} className={'my-button ' + className} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;