import * as React from 'react';

// @ts-ignore
import imgNot from '../../images/imageNotFound.png'
import './BookCard.scss'
import MyButton from "../../components/UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import books from "../../pages/Books/Books";

import data from "../../public/books.json"
import {useSpecificBookContext} from "../../features/context/SpecificBookContext";
import {useContext} from "react";
import {BooksContext} from "../../features/context/BooksContext";

const BookCard = ({id,author, price, img, title, shortDescription, description})  => {
    const navigate = useNavigate()
    // const books = data.books
    const { books } = useContext(BooksContext);
    const {dispatch} = useSpecificBookContext()


    const viewBook = (e) => {
        e.preventDefault()
        const target = e.target
        const id = Number(target.id[target.id.length - 1])
        const selectedBook = books.filter((book) => book.id === id)
        console.log(selectedBook)
        dispatch({type:'INITIAL', id:id, arr:books})
        navigate(`/book/${id}`)
    }

    return (
        <div className="book-card" id={`${id}`}>
            <div className="book-card__img">
                <img src={img ? img : imgNot} alt="Default book image"/>
            </div>
            <div className="book-card__content">
                <h3 className="book-card__title">{title}</h3>
                <h4 className="book-card__author">{author}</h4>
                <div className="book-card__footer">
                    <span className="book-card__price">{price}</span>
                    <MyButton id={`button-${id}`} onClick={(e) => viewBook(e)}>
                        View
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default BookCard;