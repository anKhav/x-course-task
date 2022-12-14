import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initial = {
    items:[]
}


const cartBooksSlice = createSlice({
    name:'cartBooks',
    initialState:initial,
    reducers:{
        addBookToCart: (state, { payload }) => {
            const item = state.items.find((book) => book.id === payload.id);

            if (item) {
                item.quantity += payload.quantity;
            } else {
                state.items.push(payload);
            }
        }
    }
})

export const {addBookToCart} = cartBooksSlice.actions
export default cartBooksSlice.reducer