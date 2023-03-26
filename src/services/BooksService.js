import {INITIAL__BOOKS} from "../features/actions";

export const getBooks = async (next) => {
    try {
        let res = await fetch('http://localhost:3000/books.json')
        let da = await res.json()
        const books = await da.books
        if (localStorage.getItem("books") === null) {
            localStorage.setItem('books', JSON.stringify(books))
        }
        next({type:INITIAL__BOOKS, payload:books})
    } catch (e) {
        throw e
    }
}
export const getStoragedBooks = () => {
    return JSON.parse(localStorage.getItem('books'))
}
