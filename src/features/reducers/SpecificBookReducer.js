
import {setSpecificBook} from "../../services/SpecificBookService";
import {INITIAL__SPECIFIC__BOOK} from "../actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case INITIAL__SPECIFIC__BOOK:
            const specificBook = action.arr.find(book => book.id === action.id)
            setSpecificBook(specificBook)
            return specificBook
        default:
            return state;
    }
};
