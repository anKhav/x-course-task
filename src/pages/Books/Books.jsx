import * as React from 'react';
import {ThreeDots} from 'react-loader-spinner'
import img from '../../images/imageNotFound.png'
import BookCard from "../../layouts/BookCard/BookCard";

import './Books.scss'
import SearchInput from "../../components/UI/Inputs/SearchInput";
import Dropdown from "../../components/UI/Inputs/Dropdown";
import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {BoContext} from "../../App";
import {BooksContext} from "../../features/context/BooksContext";




const Books = () => {
    const { books } = useContext(BooksContext);

    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedItem, setSelectedItem] = useState('Price')

    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        setFilteredBooks(books)
    }, [books])

    useEffect(() => {
        const searched = books.filter((book) => {
            return book.title.match(keyword);
        });
        setFilteredBooks(searched)
        setSelectedItem('Price')
    }, [keyword])

    useEffect(() => {
        filterBooks()
        setKeyword('')
    }, [selectedItem])


    const filterBooks = () => {
        if (selectedItem === '0 < Price < 15') {
            setFilteredBooks(books.filter(({price}) => price > 0 && price < 15))
        } else if (selectedItem === '15 < Price < 30') {
            setFilteredBooks(books.filter(({price}) => price > 15 && price < 30))
        } else if (selectedItem === 'Price > 30') {
            setFilteredBooks(books.filter(({price}) => price > 30))
        } else {
            setFilteredBooks(books)
        }
    }


    return (
            <div className="books">
                <div className="books__header">
                    <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                    <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                </div>
                {
                    filteredBooks.length !== 0  ?
                        <div className="books__content">
                            {
                                filteredBooks.map((book) =>
                                    {
                                        return <BookCard
                                            key={book.id}
                                            id={book.id}
                                            price={book.price}
                                            author={book.author}
                                            img={book.image}
                                            title={book.title}
                                        />
                                    }
                                )
                            }
                        </div>
                        :
                        <div className="loader">
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

export default Books;