
import {addToCart, clearCart} from "../../services/CartService";
import {ADD__CART, CLEAR__CART} from "../actions";
import {calculateTotalAmount, calculateTotalPrice} from "../../utils/CartReducerHelpers";
import {round} from "lodash";

export function cartReducer(state, action) {
    switch (action.type) {

        case ADD__CART: {
                        if (state.data.length === 0){
                            state.totalAmount = action.book.amount
                            state.totalPrice = round(action.book.price * action.book.amount, 2)
                            state.data.push(action.book)
                            addToCart(state)
                            return state
                        } else {
                            const itemIndex = state.data.findIndex((item) => {
                                return (item.id === action.book.id)
                            })
                            if(itemIndex >= 0){
                                state.data[itemIndex].amount += action.book.amount
                            } else {
                                const tempProduct = {...action.book}
                                state.data.push(tempProduct)
                            }
                            state.totalAmount = calculateTotalAmount(state.data)
                            state.totalPrice = round(calculateTotalPrice(state.data),2)
                            state.error = ''
                            addToCart(state)
                            return state
                        }
            }
            return state
        case CLEAR__CART: {
            clearCart()
            state = {
                totalAmount:0,
                totalPrice:0,
                data:[]
            }
            return state
        }
        case 'REMOVE_BOOK' : {
            const filteredBooks = state.data.filter(book => book.id !== action.id)
            state.data = [...filteredBooks]
            state.totalAmount = calculateTotalAmount(state.data)
            state.totalPrice = round(calculateTotalPrice(state.data),2)
            addToCart(state)
            return state
        }
        case 'DECREMENT_AMOUNT' : {
            const selectedBook = state.data.find(book => book.id === action.id)
            const itemIndex = state.data.findIndex((item) => {
                return (item.id === action.id)
            })
            if(itemIndex >= 0){
                state.data[itemIndex].amount--
            }
            state.totalAmount = calculateTotalAmount(state.data)
            state.totalPrice = round(calculateTotalPrice(state.data),2)

            if (state.data[itemIndex].amount === 0) {
                state.data = state.data.filter(book => state.data[itemIndex].amount === book.id)
                return state
            }
            addToCart(state)
            return state
        }
        case 'INCREMENT_AMOUNT' : {
            const selectedBook = state.data.find(book => book.id === action.id)
            const itemIndex = state.data.findIndex((item) => {
                return (item.id === action.id)
            })
            if(itemIndex >= 0){
                state.data[itemIndex].amount++
            }
            state.totalAmount = calculateTotalAmount(state.data)
            state.totalPrice = round(calculateTotalPrice(state.data),2)
            addToCart(state)
            return state
        }
        case 'SET_ERROR' : {
            state = {
                ...state, error: action.error
            }
            return state
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}