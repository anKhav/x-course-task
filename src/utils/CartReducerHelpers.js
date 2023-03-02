export const calculateTotalAmount = (data) => {
    const res = data.reduce((acc,book) => {
        acc += book.amount
        return acc
    },0)
    return res
}

export const calculateTotalPrice = (data) => {
    const res = data.reduce((acc,book) => {
        acc += book.price * book.amount
        return acc
    },0)
    return res
}