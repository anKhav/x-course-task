import React, { useReducer, useEffect } from "react";
import { booksReducer} from "../reducers/BooksReducer";
import {BooksContext} from "../context/BooksContext";
import {fetchBooks, INITIAL__BOOKS} from "../actions";
import {getUser} from "../../services/UserService";
import {getStoragedBooks} from "../../services/booksService";

const initialState = getStoragedBooks() || [];
const BooksProvider = props => {
    const [books, booksDispatch] = useReducer(booksReducer, initialState);
    const value = {books, booksDispatch}

    return (
        <BooksContext.Provider value={value}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
