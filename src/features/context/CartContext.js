import {createContext, useContext} from "react";

const CartContext = createContext(undefined)



function useCartContext() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

export { CartContext, useCartContext }