import {useEffect, useState} from 'react';
import {MyButton} from "../../components/UI/MyButton/MyButton";

import './Cart.scss'
import {CLEAR__CART} from "../../features/actions";
import {ThreeDots} from "react-loader-spinner";
import img from "../../images/shopping-cart-icon.svg";
import BookInCart from "../../layouts/BookInCart/BookInCart";
import {useCart} from "../../hooks/useCart";

const Cart = () => {
    const {cart:{data, totalPrice}, cartDispatch} = useCart()

    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(data)
    }, [data])



    const purchaseHandler = (e) => {
        e.preventDefault()
        cartDispatch({type:CLEAR__CART})
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
                    <div className='cart--empty'>
                        <span className="cart__title--empty">
                            Your cart is empty
                        </span>
                        <img src={img} alt="Cart icon"/>
                    </div>
                    :
                    <div className='cart__wrapper'>
                        <div className="cart__content">
                            {
                                books.map(book => {
                                    return (
                                        <BookInCart key={book.id} book={book}/>
                                    )
                                })
                            }
                        </div>
                        <div className="cart__footer">
                            <p className="cart__total-price">
                                <span className='title'>Total price:</span>
                                <span>{totalPrice}$</span>
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