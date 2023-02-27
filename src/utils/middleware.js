import {INITIAL__BOOKS} from "../features/actions";

export const middleware = async (next) => {
    let res = await fetch('books.json')
    let da = await res.json()
    const books = await da.books
    next({type:INITIAL__BOOKS, payload:books})
}