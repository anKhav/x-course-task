import React, {useEffect, useState} from 'react';
import MyButton from "../../components/UI/MyButton/MyButton";

import './Cart.scss'
import {useCartContext} from "../../features/context/CartContext";
import {clearCart} from "../../services/CartService";

const Cart = () => {
    const {cart} = useCartContext()

    const [books, setBooks] = useState(cart.data)


    console.log(cart)
    return (
        <div className='cart'>
           <div className="cart__header">
               <MyButton
                   disabled={books.length === 0}
                    onClick={(e) => {
                            e.preventDefault()
                            setBooks([])
                            clearCart()
                        }
                    }
               >
                   Purchase
               </MyButton>
           </div>
            {   books.length ===0 ?
                <div>
                    Cart is empty
                </div>
                :
                <div>
                    <div className="cart__content">
                        {
                            books.map(book => {
                                return (
                                    <div className="book">
                                        <p className="book__name">{book.title}</p>
                                        <span className="book__count">{book.amount}</span>
                                        <span className="book__total-price">{book.price * book.amount}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cart__footer">
                        <p className="cart__total-price">
                            {cart.totalPrice}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;