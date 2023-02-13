import React, { useReducer, useEffect } from "react";
import { booksReducer, fetchInitial, addTodo } from "../reducers/BooksReducer";
import {BooksContext} from "../context/BooksContext";


const BooksProvider = props => {
    const [books, dispatch] = useReducer(booksReducer, []);

    useEffect(() => {
        fetch("http://localhost:3000/books.json")
            .then(response => response.json())
            .then(res => res.books)
            .then(data => dispatch(fetchInitial(data)));
    }, []);

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
