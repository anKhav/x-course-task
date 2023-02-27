import React, { useReducer, useEffect } from "react";
import { booksReducer} from "../reducers/BooksReducer";
import {BooksContext} from "../context/BooksContext";
import {fetchBooks, INITIAL__BOOKS} from "../actions";


const BooksProvider = props => {
    const [books, booksDispatch] = useReducer(booksReducer, []);
    const value = {books, booksDispatch}

    return (
        <BooksContext.Provider value={value}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
