import Authorization from "../views/Authorization/Authorization";
import Book from "../views/Book/Book";
import {BOOK_ROUTE, BOOKS_ROUTE, CART_ROUTE, LOGIN_ROUTE} from "../utils/constants/consts";
import Books from "../views/Books/Books";
import Cart from "../views/Cart/Cart";

export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        element: <Authorization/>
    },
    {
        path:'/',
        element: <Authorization/>
    },
    {
        path:BOOKS_ROUTE,
        element: <Books/>
    },
    {
        path:BOOK_ROUTE,
        element: <Book/>
    },
    {
        path:CART_ROUTE,
        element: <Cart/>
    },
]