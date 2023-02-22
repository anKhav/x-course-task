import {
    BOOK_ROUTE, BOOKS_ROUTE, CART_ROUTE, LOGIN_ROUTE
} from "./utils/consts";
import Books from "./pages/Books/Books";
import * as React from 'react';
import Auth from "./pages/Auth/Auth";
import SingleBook from "./pages/SingleBooks/SingleBook";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound";
export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        element:<Auth/>
    },
    {
        path: '*',
        element: <NotFound/>
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
    {
        path:BOOKS_ROUTE,
        element:<Books/>
    },
]