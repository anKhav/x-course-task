
import {addToCart, clearCart} from "../../services/CartService";
import {ADD__CART, CLEAR__CART} from "../actions";

export function cartReducer(state, action) {
    switch (action.type) {

        case ADD__CART: {
                    // if ((Number(state.totalAmount) + Number(action.book.amount)) < 120) {
                        if (state.data.length === 0){
                            state.totalAmount = action.book.amount
                            state.totalPrice = action.book.price * action.book.amount
                            state.data.push(action.book)
                            console.log(Number(state.totalAmount) + Number(action.book.amount))
                            addToCart(state)
                            return state
                        } else {
                            const itemIndex = state.data.findIndex((item) => {
                                return (item.id === action.book.id)
                            })
                            if(itemIndex >= 0){
                                console.log(state.data[itemIndex].amount);
                                state.data[itemIndex].amount += action.book.amount
                            } else {
                                const tempProduct = {...action.book}
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
                            state.error = ''
                            console.log(state);
                            console.log(state.totalAmount);
                            console.log(action.book.amount);
                            console.log(Number(state.totalAmount) + Number(action.book.amount))
                            addToCart(state)
                            return state
                        }
                    // } else  {
                    //     state = {...state, error:'Too much'}
                    //     console.log(state)
                    // }
            }
            // addToCart(state)
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