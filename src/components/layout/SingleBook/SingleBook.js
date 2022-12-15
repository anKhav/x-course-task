import React from 'react';
import { useNavigate } from "react-router-dom";
import notFoundImg from '../../../assest/images/system/imageNotFound.png'
import Button from "../../buttons/button/Button";
import './SingleBook.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSingleBook} from "../../../features/SingleBook/singleBookSlice";

const SingleBook = ({id, author, price, image, title}) => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.books)
    const navigate = useNavigate()

    const openSingleBooks = async (e) => {
        e.preventDefault()
        const selectedBook = await books.find(book => Number(book.id) === Number(e.target.id))
        dispatch(setSingleBook({...selectedBook, quantity:1}))
        navigate(`../book/${selectedBook.id}`)
    }


    return (
        <div className='single-book'>
            <img loading='lazy' src={image ? image : notFoundImg} alt={title} className="img"/>
            <h2 className="name">{title}</h2>
            <h3 className="author">{author}</h3>
            <div className="footer">
                <span className="price">{`${price}$`}</span>
                <Button id={id} onClick={(e) => openSingleBooks(e)}>View</Button>
            </div>
        </div>
    );
};

export default SingleBook;