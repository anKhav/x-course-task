import React, { useReducer, useEffect } from "react";
import { booksReducer} from "../reducers/BooksReducer";
import {BooksContext} from "../context/BooksContext";
import {fetchBooks} from "../actions";


const BooksProvider = props => {
    const [books, booksDispatch] = useReducer(booksReducer, []);
    const value = {books, booksDispatch}

    useEffect(() => {
        fetch('/books.json')
            .then(response => response.json())
            .then(res => res.books)
            .then(data => booksDispatch(fetchBooks(data)));
    }, []);

    return (
        <BooksContext.Provider value={value}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
