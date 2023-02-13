const setSpecificBook = (book) => {
    localStorage.setItem('book', JSON.stringify(book))
}

const getSpecificBook = () => {
    return JSON.parse(localStorage.getItem('book'))
}

const deleteSpecificBook = () => {
    localStorage.removeItem('book')
}

export {setSpecificBook, getSpecificBook, deleteSpecificBook}