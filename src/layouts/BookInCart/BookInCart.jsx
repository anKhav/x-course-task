import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {round} from "lodash";
import DeleteBasketSvg from "../../components/UI/Icons/DeleteBasketSvg";
import {CartContext} from "../../features/context/CartContext";

const BookInCart = ({book}) => {
    const {cart:{data, totalPrice}, cartDispatch, setState} = useContext(CartContext)
    const {cart:{totalAmount, error}} = useContext(CartContext);

    const [isError, setIsError] = useState(false)

    const buyingLimit = 120

    useEffect(() => {
        if (+totalAmount  >= buyingLimit){
            cartDispatch({type:'SET_ERROR', error:`You can buy only ${buyingLimit} pcs.`})
            setIsError(true)
        } else {
            setIsError(false)
        }
    }, [totalAmount])

    const removeHandler =  (e) => {
        const id = e.target.dataset.id !== undefined ? +e.target.dataset.id : +e.target.parentNode.dataset.id
        e.preventDefault()
        cartDispatch({type:'REMOVE_BOOK', id:id})
        setState(prev => !prev)
    }

    const decrementBookHandler = (e) => {
        const id = +e.target.dataset.id
        e.preventDefault()
        cartDispatch({type:'DECREMENT_AMOUNT', id:id})
        setState(prev => !prev)
    }
    const incrementBookHandler = (e) => {
        const id = +e.target.dataset.id
        e.preventDefault()
        cartDispatch({type:'INCREMENT_AMOUNT', id:id})
        setState(prev => !prev)
    }

    return (
        <div className='book'>
            <div className="book__wrapper">
                <Link className="book__name" to={`/book/${book.id}`}>
                    {book.title}
                </Link>
                <span className="book__price">{book.price}$</span>
                <span className="book__count">{book.amount === 1 ? book.amount + 'pc.': book.amount + 'pcs.'}</span>
                <span className="book__total-price">{round(book.price * book.amount, 2)}$</span>
                <div className="book__amount-buttons">
                    <button className='decrement' data-id={book.id} onClick={decrementBookHandler}>-</button>
                    <button disabled={isError} className='increment'  data-id={book.id} onClick={incrementBookHandler}> +</button>
                </div>
                <button className='book__remove' onClick={removeHandler} data-id={book.id}>
                    <DeleteBasketSvg/>
                </button>
            </div>
            {
                isError && <div className='buying-limit'>{error}</div>
            }
        </div>
    );
};

export default BookInCart;