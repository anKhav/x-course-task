
import {addToCart, clearCart} from "../../services/CartService";
import {ADD__CART, CLEAR__CART} from "../actions";

export function cartReducer(state, action) {
    switch (action.type) {

        case ADD__CART: {
            console.log(state)
                if (state.data.length === 0){
                    state.totalAmount = action.book.amount
                    state.totalPrice = action.book.price * action.book.amount
                    state.data.push(action.book)
                    addToCart(state)
                    return state
                } else {
                    const itemIndex = state.data.findIndex((item) => {
                        return (item.id === action.book.id)
                    })
                    if(itemIndex >= 0){
                        console.log(state.data[itemIndex].amount);
                        console.log(action.book.amount);
                        console.log(state);
                        state.data[itemIndex].amount += action.book.amount
                    } else {
                        const tempProduct = {...action.book}
                        console.log(tempProduct)
                        state.data.push(tempProduct)
                    }
                    state.totalAmount = state.data.reduce((acc,book) => {
                        acc += book.amount
                        return acc
                    },0)
                    state.totalPrice = state.data.reduce((acc,book) => {
                        acc += book.price * book.amount
                        return acc
                    },0)
                    addToCart(state)
                    return state
                }
            }
            addToCart(state)
            return state
        case CLEAR__CART: {
            clearCart()
            state = {
                totalAmount:0,
                totalPrice:0,
                data:[]
            }
            console.log(state)
            return state
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}