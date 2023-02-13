const addToCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
    // localStorage.setItem('cart', 'cart')
}
const getCart = () => {
    return JSON.parse(localStorage.getItem('cart'))
}

const clearCart = () => {
    localStorage.removeItem('cart')
}

export {addToCart,getCart,clearCart}