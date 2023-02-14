
import {addToCart, clearCart} from "../../services/CartService";

export function cartReducer(state, action) {
    switch (action.type) {
        case 'add': {
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
                        state.data[itemIndex].amount += action.book.amount
                    } else {
                        const tempProduct = {...action.book}
                        state.data.push(tempProduct)
                    }
                    console.log(itemIndex)
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
            addToCart(state)
            console.log(state)
            return state
        }
        case 'clear': {
            clearCart()
            return []
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}