import {useContext, useEffect, useState} from 'react';
import {MyButton} from "../../components/UI/MyButton/MyButton";

import './Cart.scss'
import {CartContext} from "../../features/context/CartContext";
import {CLEAR__CART} from "../../features/actions";
import {ThreeDots} from "react-loader-spinner";
import {Link} from "react-router-dom";

const Cart = () => {
    const {cart:{data, totalPrice}, cartDispatch} = useContext(CartContext)

    const [books, setBooks] = useState(data)

    useEffect(() => {
        setBooks(data)
    }, [data])

    const purchaseHandler = (e) => {
        e.preventDefault()
        cartDispatch({type:CLEAR__CART})
        setBooks([])
    }
    return (
        books ?
            <div className='cart'>
                <div className="cart__header">
                    <MyButton
                        disabled={books.length === 0}
                        onClick={(e) => purchaseHandler(e)}
                    >
                        Purchase
                    </MyButton>
                </div>
                {books.length === 0 ?
                    <div>
                        Cart is empty
                    </div>
                    :
                    <div className='cart__wrapper'>
                        <div className="cart__content">
                            {
                                books.map(book => {
                                    return (
                                        <div className="book" key={book.id}>
                                            <Link className="book__name" to={`/book/${book.id}`}>
                                                {book.title}
                                            </Link>
                                            <span className="book__count">{book.amount === 1 ? book.amount + 'pc.': book.amount + 'pcs.'}</span>
                                            <span className="book__total-price">{book.price * book.amount}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="cart__footer">
                            <p className="cart__total-price">
                                <h4 className='title'>Total price:</h4>
                                <span>{totalPrice}</span>
                            </p>
                        </div>
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
    );
};

export default Cart;