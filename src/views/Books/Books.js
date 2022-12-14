import React, {useEffect, useLayoutEffect, useState} from 'react';
import Header from "../../components/layout/Header/Header";
import data from '../../data/books.json'
import SingleBook from "../../components/layout/SingleBook/SingleBook";
import './Books.scss'
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../features/Books/booksSlice";
import book from "../Book/Book";

const Books = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        dispatch(getBooks(currentPage))
    },[currentPage])

    const books = useSelector(state => state.books.books)
    const quantity = useSelector(state => state.books.pageNumbers)


    const paginationHandling = (e) => {
        e.preventDefault()
        const value = e.target.innerHTML
            setCurrentPage(value)
    }

    return (
        <section className='books'>
            <div className="books__wrapper section-outer">
                <div className="books__header">
                    <div className="books__search">
                        <input type="text" className="books__input"/>
                        <button className="button"></button>
                    </div>
                    <div className="books__price">
                        <input type="text" className="books__input"/>
                        <button className="button"></button>
                    </div>
                </div>
                <div className="books__content">
                    {books.map(book => <SingleBook
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        price={book.price}
                        author={book.author}
                        image={book.image}
                    />)}
                </div>
            </div>
            <div className="pagination">
                {quantity.map((page,i) => {
                    return <button className='pagination__button' key={i} onClick={(e) => paginationHandling(e)}>
                        {page}
                    </button>
                })}
            </div>
        </section>
    );
};

export default Books;