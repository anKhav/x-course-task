import React, { useReducer, useEffect } from "react";
import { booksReducer, fetchInitial, addTodo } from "../reducers/BooksReducer";
import {BooksContext} from "../context/BooksContext";
import {SERVER_URL} from "../../helpers/consts";
import {fetchBooks} from "../actions";


const BooksProvider = props => {
    const [books, dispatch] = useReducer(booksReducer, []);

    useEffect(() => {
        fetch('books.json')
            .then(response => response.json())
            .then(res => res.books)
            .then(data => dispatch(fetchBooks(data)));
    }, []);

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
