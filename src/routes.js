import {
    BOOK_ROUTE, BOOKS_ROUTE, CART_ROUTE, LOGIN_ROUTE
} from "./helpers/consts";
import Books from "./pages/Books/Books";
import * as React from 'react';
import Auth from "./pages/Auth/Auth";
import SingleBook from "./pages/SingleBooks/SingleBook";
import Cart from "./pages/Cart/Cart";
export const publicRoutes = [
    {
        path:BOOKS_ROUTE,
        element:<Books/>
    },
    {
        path:BOOK_ROUTE,
        element:<SingleBook/>
    },
    {
        path:LOGIN_ROUTE,
        element:<Auth/>
    }
]
export const privateRoutes = [
    {
        path:BOOK_ROUTE,
        element:<SingleBook/>
    },
    {
        path:CART_ROUTE,
        element:<Cart/>
    },
]