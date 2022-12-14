import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import data from '../../data/books.json'
import {useSelector} from "react-redux";

const initial = {
}


const singleBooksSlice = createSlice({
    name:'singleBook',
    initialState:initial,
    reducers:{
        setSingleBook: (state, action) => {
            state = action.payload
            localStorage.setItem('selectedProduct', JSON.stringify(state))
        },
        getSingleBook: (state, action) => {
            state.singleBook = JSON.parse(localStorage.getItem('selectedProduct'))
        }
    }
})

export const {setSingleBook,setQuantity,getSingleBook} = singleBooksSlice.actions
export default singleBooksSlice.reducer