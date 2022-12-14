import React, {useEffect, useLayoutEffect, useState} from 'react';
import Header from "../../components/layout/Header/Header";
import avatar from "../../assest/images/system/avatar.png";
import Input from "../../components/forms/Input/Input";
import Button from "../../components/buttons/button/Button";
import img from '../../assest/images/system/imageNotFound.png'
import './Book.scss'
import {useDispatch, useSelector} from "react-redux";
import InputNumber from "../../components/UI/InputNumber/InputNumber";
import {addBookToCart} from "../../features/CartBooks/cartBooksSlice";
import {useNavigate, useNavigation} from "react-router-dom";
import {getSingleBook} from "../../features/SingleBook/singleBookSlice";

const Book = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(1)
    const book = JSON.parse(localStorage.getItem('selectedProduct'))

    const addToCart = async (e) => {
        e.preventDefault()
        dispatch(addBookToCart({...book,quantity:quantity}))
        navigate(`../cart`)
    }

    return (
        <section className='book'>
            <div className='book__wrapper section-outer'>
                <div className="book__content">
                    <div className="book__main">
                        <img loading='lazy' src={book.image ? book.image : img} alt="Book image" className="book__img"/>
                        <p className="book__description">
                            {book.description}
                        </p>
                    </div>
                    <div className="book__about">
                        <h2 className="book__name">{book.title}</h2>
                        <h3 className="book__author">{book.author}</h3>
                        <h3 className="book__level">Book level</h3>
                        <p className="book__tags">Book tags</p>
                    </div>
                </div>
                <form className="book__form">
                    <p className="book__price"><span>Price,$</span> <span>{book.price}</span></p>
                    <div className="book__count">
                        <label htmlFor="count">Count</label>
                        <InputNumber quantity={quantity} setQuantity={setQuantity}/>
                    </div>
                    <p className="book__total"><span>Total price,$</span> <span>90</span></p>
                    <Button onClick={(e) => addToCart(e)}>Add to Cart</Button>
                </form>
            </div>
        </section>
    );
};

export default Book;