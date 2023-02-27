
import {ThreeDots} from 'react-loader-spinner'
import BookCard from "../../layouts/BookCard/BookCard";

import SearchInput from "../../components/UI/Inputs/SearchInput";
import Dropdown from "../../components/UI/Inputs/Dropdown";
import {useContext, useEffect, useState} from "react";
import {BooksContext} from "../../features/context/BooksContext";
import {filterBooksByPrice} from "../../utils/filterBooks";

import './Books.scss'
import {INITIAL__BOOKS} from "../../features/actions";
import {middleware} from "../../utils/middleware";
import {getBooks} from "../../services/booksService";
import {reduceTitle} from "../../utils/reduceTitle";




const Books = () => {
    const { books } = useContext(BooksContext);
    console.log(books)
    const { booksDispatch } = useContext(BooksContext);

    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedItem, setSelectedItem] = useState('Price')


    const [keyword, setKeyword] = useState('')

    useEffect(() =>{
        const res =  getBooks(booksDispatch)
    } , []);


    useEffect(() => {
        setFilteredBooks(books)
    }, [books])

    useEffect(() => {
        const searched = books.filter((book) => {
            return book.title.toLowerCase().match(keyword.toLowerCase());
        });

        setFilteredBooks(searched)
        setSelectedItem('Price')
    }, [keyword])



    useEffect(() => {
        filterBooksByPrice(selectedItem, books, setFilteredBooks)
        setKeyword('')
    }, [selectedItem])

    return (
            <div className="books">
                <div className="books__header">
                    <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                    <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                </div>
                {
                    filteredBooks && filteredBooks.length !== 0  ?
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
                                            title={reduceTitle(book.title)}
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