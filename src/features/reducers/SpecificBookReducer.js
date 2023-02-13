// actions
import {setSpecificBook} from "../../services/SpecificBookService";

const INITIAL = "INITIAL";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const ADD = "ADD";

// action creators
export const getBooks = (arr) => ({
    type: INITIAL,
    arr
});

export const fetchInitial = (arr) => ({
    arr,
});



export const reducer = (state, action) => {
    switch (action.type) {
        case INITIAL:
            const specificBook = action.arr.find(book => book.id === action.id)
            setSpecificBook(specificBook)
            return specificBook
        case TOGGLE_COMPLETE:
            console.log(state)
            return action
        default:
            return state;
    }
};
