import React, {useEffect, useState} from 'react';
import {MyButton} from "../../components/UI/MyButton/MyButton";
import {ADD__CART} from "../../features/actions";
import {useCart} from "../../hooks/useCart";
import {LIMIT_BOOKS_TO_CART} from "../../utils/consts";

const SpecificBookForm = ({book}) => {

    const {cartDispatch, setState} = useCart()
    const {cart:{totalAmount, error}} = useCart()

    const [isError, setIsError] = useState(false)
    const [bookToCart, setBookToCart] = useState({})
    const [amount, setAmount] = useState(1)

    useEffect(() => {
        if (Number(amount) + Number(totalAmount) > LIMIT_BOOKS_TO_CART){
            cartDispatch({type:'SET_ERROR', error:`You can buy only ${LIMIT_BOOKS_TO_CART} pcs.`})
            setIsError(true)
        } else {
            setIsError(false)
        }
    }, [totalAmount, amount, cartDispatch])

    useEffect(() => {
        setBookToCart({...book, amount:+amount || 1})
    }, [amount,book, totalAmount])

    const amountHandler = (e) => {
        if (Number(e.target.value) > 42) {
            setAmount(42)
        } else if (Number(e.target.value) === 0) {
            setAmount(null)
        } else {setAmount(Number(e.target.value))
        }
    }
    const addToCartHandler = (e) => {
        e.preventDefault()
        cartDispatch({type:ADD__CART, book:bookToCart})
        if (amount === null) {
            setAmount(1)
        }
        setBookToCart({...bookToCart, amount:+amount })
        setState(prev => !prev)
    }

    return (
        <form className="single-book__form" data-testid='form'>
            <div className="single-book__price">
                <span className="title">Price</span>
                <span className="value">{book.price}$</span>
            </div>
            <div className="single-book__count">
                <label className="title">Count</label>
                <div className="single-book__input">
                    <input
                        value={amount}
                        onChange={e => amountHandler(e)}
                        max='64'
                        min='1'
                        type="number"
                        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                        data-testid='input'
                    />
                    <button
                        disabled={amount <= 1}
                        onClick={(e) => {
                            e.preventDefault()
                            setAmount(prevState => prevState - 1 )
                        }}
                        data-testid='decrement'
                        className='decrement'
                    >
                        &#9660;
                    </button>
                    <button
                        disabled={amount >= 42}
                        onClick={(e) => {
                            e.preventDefault()
                            setAmount(prevState => prevState + 1 )
                        }}
                        data-testid='increment'
                        className='increment'
                    >
                        &#9650;
                    </button>
                </div>
            </div>
            {
                isError && <div className='buying-limit'>{error}</div>
            }
            <div
                data-testid='total-price'
            >{(amount * book.price).toFixed(2)} $</div>
            <MyButton
                className='single-book__add-button'
                disabled={isError || amount === null}
                onClick={(e) => addToCartHandler(e)}
            >
                Add to Cart
            </MyButton>
        </form>
    );
};

export default SpecificBookForm;