import React from 'react';
import './Cart.scss'
import cart from '../../assest/images/system/cart.svg'
import Button from "../../components/buttons/button/Button";
import {useSelector} from "react-redux";

const Cart = () => {
    const bookInCart = useSelector(state => state.cartBooks.items)
    console.log(bookInCart)
    return (
        <div className='cart section-outer'>
                <div className="cart__button">
                    <Button disabled={!bookInCart.length ? true : false} >Purchase</Button>
                </div>
            <div className="cart__content">
                {!bookInCart.length ?
                    <div className='cart--empty'>
                        <div className="cart__image">
                            <img src={cart} alt="Cart image"/>
                        </div>
                        <p className="cart__text">
                            Cart is empty...
                        </p>
                    </div>
                     :
                    <div className='books'>
                        {bookInCart.map(book => {
                            return (
                                <div className='book' key={book.id}>
                                    <p>{book.title}</p>
                                    <span>{book.quantity} psc.</span>
                                    <span>{book.price * book.quantity}$</span>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;