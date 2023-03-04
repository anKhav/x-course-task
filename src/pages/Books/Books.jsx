
import {ThreeDots} from 'react-loader-spinner'
import BookCard from "../../layouts/BookCard/BookCard"

import SearchInput from "../../components/UI/Inputs/SearchInput"
import Dropdown from "../../components/UI/Inputs/Dropdown"
import {useEffect, useState} from "react"

import './Books.scss'

import {getBooks} from "../../services/booksService"
import {reduceTitle} from "../../utils/reduceTitle"
import {useBooks} from "../../hooks/useBooks";




const Books = () => {
    const { books, booksDispatch } = useBooks()

    const [keyword, setKeyword] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [selectedPrice, setSelectedPrice] = useState('')
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
            const res =  getBooks(booksDispatch)
    } , [booksDispatch])

    useEffect(() => {
        setSearchResults(books)
        setFilteredBooks(books)
    }, [books])

    useEffect(() => {
        const results = filteredBooks.filter((book) =>
            book.title.toLowerCase().includes(keyword.toLowerCase())
        )
        setSearchResults(results)
    }, [keyword, filteredBooks])

    const searchHandler = (e) => {
        setKeyword(e.target.value)
    }

    const priceHandler = (e) => {
        setSelectedPrice(e.target.value)
        if (e.target.value === '0-15'){
            setFilteredBooks(books.filter(({price}) => price <= 15))
        } else if (e.target.value === '15-30'){
            setFilteredBooks(books.filter(({price}) => price >= 15 && price <= 30))
        } else if (e.target.value === '30+'){
            setFilteredBooks(books.filter(({price}) => price >= 30))
        } else {
            setFilteredBooks(books)
        }
    }
    return (
            <div className="books">
                <div className="books__header">
                    <SearchInput
                        value={keyword}
                        onChange={searchHandler}/>
                    <Dropdown
                        value={selectedPrice}
                        onChange={priceHandler}/>
                </div>
                {
                    filteredBooks.length !== 0 ?
                        <div
                            className="books__content"
                            data-testid='books'
                        >
                            {
                                searchResults.length === 0 ?
                                    <p className='books__content--not-found'>
                                        Not found
                                    </p>
                                    :
                                    searchResults.map((book) =>
                                        {
                                            return <BookCard
                                                key={book.id}
                                                id={book.id}
                                                price={book.price}
                                                author={book.author}
                                                img={book.image}
                                                title={reduceTitle(book.title)}
                                            />
                                        }
                                    )
                            }
                        </div>
                        :
                        <div
                            className="loader"
                            data-testid='loader'
                        >
                            <ThreeDots
                                height="120px"
                                width="120px"
                                radius="10"
                                color="rgba(0, 0, 0, 1)"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                className="loader"
                            />
                        </div>
                }
            </div>
    );
};

export default Books