export const reduceTitle = (title, num = 24) => {
    if (title) {
        if (title.length > num){
            const arr = title.split('')
            arr.length = num
            arr.push('...')

            title = arr.join('')
            return title
        } else {
            return title
        }
    }
    return
}