export const makeUniqueArray = (array) => {
    const uniqueArray =  [...new Set(array)]
    return uniqueArray
}