import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/Books/booksSlice'
import singleBooksReducer from '../features/SingleBook/singleBookSlice'
import cartBooksReducer from "../features/CartBooks/cartBooksSlice";
import userReducer from "../features/User/userSlice";

export const store = configureStore({
  reducer: {
    books:booksReducer,
    singleBook:singleBooksReducer,
    cartBooks: cartBooksReducer,
    user: userReducer
  },
});
