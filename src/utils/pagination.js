export const getPageNumbers = (arr, limit) => {
    let res = []
    const num = Math.round(arr.length / limit)
    for(let i = 1; i <= num; i++){
        res.push(i)
    }
    return res

}
export const getPaginatedArr =  (array, offset, limit) => {
    const arr = []
    const obj = array.reduce((acc, el,i) => {
        if (i+1 > Number(offset) && i+1 <= Number(offset) + Number(limit)) {
            arr.push(el)
        }
        acc.books = arr
        return acc
    },{})
    return obj
}