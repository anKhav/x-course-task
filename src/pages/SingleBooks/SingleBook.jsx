import * as React from 'react';

import notFoundImg from '../../images/imageNotFound.png'

import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";
import SpecificBookForm from "./SpecificBookForm";
import {useBooks} from "../../hooks/useBooks";

import './SingleBook.scss'


const SingleBook = () => {


    const {id} = useParams()

    const { books } = useBooks()

    const [book,setBook] = useState({})
    useEffect(() => {
        window.scrollTo({top:0, behavior:'smooth'})
    })

    useEffect(() => {
        const getBook = async () => {
            await setBook(books.find(book => +book.id === +id))
        }
        getBook()
    }, [books,id])

    return (
        book ?
                <div className="single-book" data-testid='specificBook'>
                    <div className="single-book__wrapper">
                        <div className="single-book__img">
                            <img src={book.image || notFoundImg} alt={book.title}/>
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
                            <SpecificBookForm book={book}/>
                        </div>
                    </div>
                    <p className="single-book__description">
                        {book.description}
                    </p>
                </div>
                :
                <div className="loader" data-testid='loader'>
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