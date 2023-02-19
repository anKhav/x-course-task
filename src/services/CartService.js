const addToCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
const getCart = () => {
    return JSON.parse(localStorage.getItem('cart'))
}

const clearCart = () => {
    localStorage.removeItem('cart')
}

export {addToCart,getCart,clearCart}