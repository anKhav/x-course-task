import {
    BOOK_ROUTE, BOOKS_ROUTE, CART_ROUTE, LOGIN_ROUTE
} from "./utils/consts";
import Books from "./pages/Books/Books";
import * as React from 'react';
import Auth from "./pages/Auth/Auth";
import SpecificBook from "./pages/SpecificBook/SpecificBook";
import Cart from "./pages/Cart/Cart";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        element:<Auth/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]
export const privateRoutes = [
    {
        path: '*',
        element: <NotFoundPage/>
    },
    {
        path:BOOK_ROUTE,
        element:<SpecificBook/>
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