import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import Header from "../../components/layout/Header/Header";
import data from '../../data/books.json'
import SingleBook from "../../components/layout/SingleBook/SingleBook";
import './Books.scss'
import {useDispatch, useSelector} from "react-redux";
import {getBooks, setPagesQuantity} from "../../features/Books/booksSlice";
import searchIcon from './../../assest/images/system/icons8-search.svg'
import Input from "../../components/forms/Input/Input";
import allBooks from '../../data/books.json'

const Books = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        dispatch(getBooks(currentPage))
        dispatch(setPagesQuantity())
        setFilteredBooks(books)
    },[currentPage])

    const books = useSelector(state => state.books.books)
    const quantity = useSelector(state => state.books.pageNumbers)



    const paginationHandling = (e) => {
        e.preventDefault()
        const value = e.target.innerHTML
            setCurrentPage(value)
    }

    const searchingText = async (e,printedText, array) => {
        e.preventDefault()
        if(array) {
           const resArray = array.filter(obj => obj.title.includes(printedText))
            console.log(allBooks);
           await setFilteredBooks(resArray)
        }
    }

    const searchOnChangeHandler = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }

    return (
        <section className='books'>
            <div className="books__wrapper section-outer">
                <div className="books__header">
                    <div className="books__search">
                        <Input onChange={(e) => searchOnChangeHandler(e)} value={searchValue} className="books__input" placeholder="Search by book name">
                            <button onClick={(e) => searchingText(e,searchValue, allBooks.books)} className="search__button">
                                <img src={searchIcon} alt=""/>
                            </button>
                        </Input>
                    </div>
                    <div className="books__price">
                        <input type="text" className="books__input"/>
                        <button className="button"></button>
                    </div>
                </div>
                <div className="books__content">
                    {
                        filteredBooks.length > 0 ?
                            filteredBooks.map(book => <SingleBook
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                price={book.price}
                                author={book.author}
                                image={book.image}
                            />)
                            :
                            <div className='books-not-found'>We don't have this book!</div>
                    }
                </div>
            </div>
            <div className="pagination">
                {
                    filteredBooks.length > 0 && quantity.map((page,i) => {
                        return <button className='pagination__button' key={i} onClick={(e) => paginationHandling(e)}>
                            {page}
                        </button>
                    })
                }
            </div>
        </section>
    );
};

export default Books;