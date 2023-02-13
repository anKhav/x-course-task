import * as React from 'react';
import './Dropdown.scss'
import {useState} from "react";



const Dropdown = ({selectedItem, setSelectedItem}) => {
    const [isOpen, setIsOpen] = useState(false)
    // const [selectedItem, setSelectedItem] = useState('Price')

    const dropdownOpenAndCloseTrigger = (e) => {
        e.preventDefault()
        setIsOpen(prevState => !prevState)
    }

    const selectOption = (e) =>  {
        setSelectedItem(e.target.innerText)
        setIsOpen(prevState => !prevState)
    }
    return (
        <div className='dropdown'>
            <label htmlFor='dropdown__button'>{selectedItem}</label>
            <button id='dropdown__button' className="dropdown__button" onClick={(e) => dropdownOpenAndCloseTrigger(e)}>
                &#9662;
            </button>
            <ul className={!isOpen ? 'dropdown__list' : 'dropdown__list dropdown__list--open'}>
                <li onClick={(e) => selectOption(e)} className="dropdown__item">All</li>
                <li onClick={(e) => selectOption(e)} className="dropdown__item">0 &lt; Price &lt; 15</li>
                <li onClick={(e) => selectOption(e)} className="dropdown__item">15 &lt; Price &lt; 30</li>
                <li onClick={(e) => selectOption(e)} className="dropdown__item">Price &gt; 30</li>
            </ul>
        </div>
    );
};

export default Dropdown;