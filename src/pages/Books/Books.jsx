
import {ThreeDots} from 'react-loader-spinner'
import BookCard from "../../layouts/BookCard/BookCard";

import SearchInput from "../../components/UI/Inputs/SearchInput";
import Dropdown from "../../components/UI/Inputs/Dropdown";
import {useContext, useEffect, useState} from "react";
import {BooksContext} from "../../features/context/BooksContext";
import {filterBooksByPrice} from "../../utils/filterBooks";

import './Books.scss'
import {useSearchParams} from "react-router-dom";
import {getPageNumbers, getPaginatedArr} from "../../utils/pagination";
import useWindowSize from "../../hooks/useWindowSize";
import {DEFAULT_SEARCH_QUERY} from "../../utils/consts";




const Books = () => {
    const { books } = useContext(BooksContext);
    const [searchParams, setSearchParams] = useSearchParams()
    const offset = searchParams.get('offset')
    const limit = searchParams.get('limit')

    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedItem, setSelectedItem] = useState('Price')

    const [pageAmount, setPageAmount] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    const [keyword, setKeyword] = useState('')

    const paginatedBooks = getPaginatedArr(books, offset, limit).books

    const {innerWidth} = useWindowSize()

    useEffect(() => {
        if (innerWidth <= 768) {
            setSearchParams('?offset=0&limit=2')
        } else {
            setSearchParams(DEFAULT_SEARCH_QUERY)
        }
    }, [innerWidth])

    useEffect(() => {
        !limit ? setFilteredBooks(books) : setFilteredBooks(paginatedBooks)
        limit && setPageAmount(getPageNumbers(books,limit))
    }, [books, limit, offset])

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
                            {
                                pageAmount.length !== 0 && <div className="pagination">
                                    {
                                        pageAmount.map(page => {
                                           return <button
                                                key={page}
                                                data-page={page}
                                                className={currentPage === page ? 'pagination__button pagination__button--active' : 'pagination__button'}
                                               onClick={(e) => {
                                                    console.log(typeof page)
                                                    console.log(typeof currentPage)
                                                    e.preventDefault()
                                                    setCurrentPage(Number(e.target.dataset.page))
                                                    setKeyword('')
                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: "smooth"
                                                    });
                                                    setSearchParams(`offset=${(Number(e.target.innerText) -1) * limit}&limit=${limit}`)
                                                }}
                                                >{page}</button>
                                        })
                                    }
                                </div>
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