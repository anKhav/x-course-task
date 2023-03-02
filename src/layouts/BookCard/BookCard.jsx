
import imgNot from '../../images/imageNotFound.png'
import './BookCard.scss'
import 'animate.css';
import {MyButton} from "../../components/UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {BooksContext} from "../../features/context/BooksContext";
import {SpecificBookContext} from "../../features/context/SpecificBookContext";
import {INITIAL__BOOKS} from "../../features/actions";

const BookCard = ({id,author, price, img, title})  => {
    const navigate = useNavigate()

    const { books } = useContext(BooksContext);
    const {specificBookDispatch} = useContext(SpecificBookContext)

    const viewingBook = (e) => {
        e.preventDefault()
        const target = e.target
        const id = +target.id.split('-').splice(1)
        specificBookDispatch({type:INITIAL__BOOKS, id:id, arr:books})
        navigate(`/book/${id}`)
    }

    return (
        <div className="book-card animate__fadeInDown" id={`${id}`}>
            <div className="book-card__img">
                <img src={img ? img : imgNot} alt="Default book image"/>
            </div>
            <div className="book-card__content">
                <h3 className="book-card__title">{title}</h3>
                <h4 className="book-card__author">{author}</h4>
                <div className="book-card__footer">
                    <span className="book-card__price">{price}</span>
                    <MyButton id={`button-${id}`} onClick={(e) => viewingBook(e)}>
                        View
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default BookCard;