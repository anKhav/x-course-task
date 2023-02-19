export const INITIAL__BOOKS = "INITIAL";
export const ADD__CART = 'ADD__CART'
export const CLEAR__CART = 'CLEAR__CART'

export const INITIAL__SPECIFIC__BOOK = "INITIAL";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


export const fetchBooks = data => ({
    type: INITIAL__BOOKS,
    data
});

export const getInCart = data => ({
    type: INITIAL__BOOKS,
    data
});
