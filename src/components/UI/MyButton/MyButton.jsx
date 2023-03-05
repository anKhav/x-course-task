import * as React from 'react';
import './MyButton.scss';
import {memo} from "react";

const Button  = ({children, onClick, id, className, disabled, ref}) => {
    return (
        <button ref={ref} disabled={disabled} id={id} className={'my-button ' + className} onClick={onClick}>
            {children}
        </button>
    );
};

export const MyButton = memo(Button);