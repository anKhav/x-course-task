import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import data from '../../data/books.json'
import {makeUniqueArray} from "../../utils/helpers/helpers";

const books = data.books
const initial = {
    books:[],
    limit:6,
    pageNumbers:[]
}



const booksSlice = createSlice({
    name:'books',
    initialState:initial,
    reducers:{
        getBooks: (state,action) => {
            for(let i=1; i<= Math.ceil(books.length / state.limit); i++){
                state.pageNumbers.push(i)
            }
            state.totalQuantity = makeUniqueArray(state.pageNumbers)
            if (action.payload === 1){
                state.books = books.filter(book => book.id <= state.limit)
            } else {
                state.books = books.filter(book =>  book.id <= action.payload * state.limit && book.id > (action.payload - 1) * state.limit)
            }
        }
    }
})

export const {getBooks} = booksSlice.actions
export default booksSlice.reducer