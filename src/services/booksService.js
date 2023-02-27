import {INITIAL__BOOKS} from "../features/actions";

export const getBooks = async (next) => {
    let res = await fetch('http://localhost:3000/books.json')
    let da = await res.json()
    const books = await da.books
    next({type:INITIAL__BOOKS, payload:books})
}