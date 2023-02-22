import * as React from 'react';

import img from '../../images/imageNotFound.png'


import './SingleBook.scss'
import {MyButton} from "../../components/UI/MyButton/MyButton";
import {SpecificBookContext} from "../../features/context/SpecificBookContext";
import {useContext, useEffect, useState} from "react";
import {BooksContext} from "../../features/context/BooksContext";
import {useParams} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";
import {CartContext} from "../../features/context/CartContext";
import {ADD__CART, INITIAL__SPECIFIC__BOOK} from "../../features/actions";
import {reduceTitle} from "../../utils/reduceTitle";


const SingleBook = () => {


    const {book, specificBookDispatch} = useContext(SpecificBookContext)
    const {id} = useParams()
    const { books } = useContext(BooksContext);
    const {cartDispatch, setState} = useContext(CartContext)
    const {cart:{totalAmount}} = useContext(CartContext);

    const [bookToCart, setBookToCart] = useState({})
    const [amount, setAmount] = useState(1)
    const [error, setError] = useState(false)


    useEffect(() => {
    }, [totalAmount, amount])

    useEffect(() => {
        setBookToCart({...book, amount:amount || 1})
    }, [amount,book, totalAmount])

    useEffect(() => {
        specificBookDispatch({type:INITIAL__SPECIFIC__BOOK, id:Number(id), arr:books})
    }, [books,id])

    const amountHandler = (e) => {
        if (Number(e.target.value) > 42) {
            setAmount(42)
        } else if (Number(e.target.value) === 0) {
            setAmount('')
        } else {setAmount(e.target.value)
        }
    }
    const addToCartHandler = (e) => {
        e.preventDefault()
        if (totalAmount < 120 && bookToCart.amount + totalAmount < 120){
            cartDispatch({type:ADD__CART, book:bookToCart})
            setBookToCart({...bookToCart, amount:amount})
            setState(prev => !prev)
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        books && book ?
                <div className="single-book">
                    <div className="single-book__wrapper">
                        <div className="single-book__img">
                            <img src={book.image || img} alt="Book image"/>
                        </div>
                        <div className="single-book__container">
                            <div className="single-book__content">
                                <h2 className="single-book__title">{reduceTitle(book.title)}</h2>
                                <h3 className="single-book__author">{book.author}</h3>
                                <h4 className="single-book__level">
                                    Book level
                                </h4>
                                <ul className="single-book__tags">
                                    <li className="single-book__tag">Tag</li>
                                    <li className="single-book__tag">Tag</li>
                                    <li className="single-book__tag">Tag</li>
                                </ul>
                            </div>
                            <form className="single-book__form">
                                <div className="single-book__price">
                                    <span className="title">Price</span>
                                    <span className="value">{book.price}$</span>
                                </div>
                                <div className="single-book__count">
                                    <label className="title">Count</label>
                                    <div className="single-book__input">
                                        <input value={amount} onChange={e => amountHandler(e)} max='64' min='1' type="number" onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}/>
                                        <button
                                            disabled={amount <= 1}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setAmount(prevState => prevState - 1 )
                                            }
                                            }
                                            className='decrement'>&#9660;</button>
                                        <button
                                            disabled={amount >= 42}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setAmount(prevState => prevState + 1 )
                                            }
                                            }
                                            className='increment'>&#9650;</button>
                                    </div>
                                </div>
                                {
                                    error && <div>You cannot buy more books! The limit is 120 pcs.</div>
                                }
                                <MyButton
                                    disabled={error}
                                    onClick={(e) => addToCartHandler(e)}
                                >Add to Cart</MyButton>
                            </form>
                        </div>
                    </div>
                    <p className="single-book__description">
                        {book.description}
                    </p>
                </div>
                :
                <div className="loader">
                    <ThreeDots
                        height="120px"
                        width="120px"
                        radius="10"
                        color="rgba(0, 0, 0, 1)"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        className="loader"
                    />
                </div>

    );
};

export default SingleBook;