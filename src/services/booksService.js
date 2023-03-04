import {INITIAL__BOOKS} from "../features/actions";

export const getBooks = async (next) => {
    let res = await fetch('books.json')
    let da = await res.json()
    const books = await da.books
    if (localStorage.getItem("books") === null) {
        localStorage.setItem('books', JSON.stringify(books))
    }
    next({type:INITIAL__BOOKS, payload:books})
}
export const getStoragedBooks = () => {
    return JSON.parse(localStorage.getItem('books'))
}