import {useReducer, useRef, useState} from "react";

import {CartContext} from "../context/CartContext";
import {getCart} from "../../services/CartService";
import {cartReducer} from "../reducers/CartReducer";

const initial = {
    totalAmount:0,
    totalPrice:0,
    data:[],
    error:''
}

const initialState = getCart() || initial;


const CartProvider = ({children}) => {
    const [cart, cartDispatch] = useReducer(cartReducer, initialState)
    const [state, setState] = useState(true)
    const [cartPosition, setCartPosition] = useState({x:null, y:null})
    const cartRef = useRef(null)
    const value = {cart, cartDispatch, setState, cartRef, cartPosition, setCartPosition}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider