import React, {useState} from 'react';
import './InputNumber.scss'
import {useDispatch} from "react-redux";


const InputNumber = ({onClick, quantity, setQuantity}) => {

    const increment = (e) => {
        e.preventDefault()
        if (!Number.isInteger(quantity) || quantity < 1){
            // setQuantity(0)
            return
        } else {
            setQuantity(quantity + 1)
        }
    }
    const decrement = (e) => {
        e.preventDefault()
        if (!Number.isInteger(quantity) || quantity <= 1){
            // setQuantity(1)
            return
        } else {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='input-number'>
            <input  type="number" value={quantity} onChange={(e) => !isNaN(e.target.value) && e.target.value !== 0 ? setQuantity(e.target.value) : setQuantity(1)}/>
            <div className="button__wrapper">
                <button onClick={(e) => increment(e)}>▲</button>
                <button onClick={(e) => decrement(e)}>▼</button>
            </div>
        </div>
    );
};

export default InputNumber;