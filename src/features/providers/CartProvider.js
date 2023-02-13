import {useReducer} from "react";

import {CartContext} from "../context/CartContext";
import {getCart} from "../../services/CartService";
import {cartReducer} from "../reducers/CartReducer";

const initial = {
    totalAmount:0,
    totalPrice:0,
    data:[]
}

const initialState = getCart() || initial;
const CartProvider = ({children}) => {
    const [cart, cartDispatch] = useReducer(cartReducer, initialState)
    const value = {cart, cartDispatch}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider