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
import {ADD__CART, INITIAL__BOOKS, INITIAL__SPECIFIC__BOOK} from "../../features/actions";
import {reduceTitle} from "../../utils/reduceTitle";


const SingleBook = () => {


    const {book, specificBookDispatch} = useContext(SpecificBookContext)
    const {id} = useParams()
    const { books, booksDispatch } = useContext(BooksContext);
    const {cartDispatch, setState} = useContext(CartContext)
    const {cart:{totalAmount, error}} = useContext(CartContext);
    // const {cart:{error}} = useContext(CartContext);
    const [isError, setIsError] = useState(false)

    const [bookToCart, setBookToCart] = useState({})
    const [amount, setAmount] = useState(1)
    useEffect(() => {
        fetch('http://localhost:3000/books.json')
            .then(response => response.json())
            .then(res => res.books)
            .then(data => booksDispatch({type:INITIAL__BOOKS, payload:data}));
    }, []);
    useEffect(() => {
        if (Number(amount) + Number(totalAmount) > 120){
            cartDispatch({type:'SET_ERROR', error:'Too much'})
            setIsError(true)
            console.log(isError)
        } else {
            setIsError('')
        }
    }, [totalAmount, amount])

    useEffect(() => {
        setBookToCart({...book, amount:+amount || 1})
    }, [amount,book, totalAmount])

    useEffect(() => {
        books && specificBookDispatch({type:INITIAL__SPECIFIC__BOOK, id:+id, arr:books})
    }, [books,id])

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
            setBookToCart({...bookToCart, amount:Number(amount) })
            setState(prev => !prev)
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
                                <h2 className="single-book__title">{book.title}</h2>
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
                                    isError && <div>{error}</div>
                                }
                                <MyButton
                                    disabled={isError || amount === null}
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