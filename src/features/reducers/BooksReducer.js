import {INITIAL__BOOKS} from "../actions";


export const booksReducer = (state, action) => {
    switch (action.type) {
        case INITIAL__BOOKS:
            return [...action.data];
        default:
            return state;
    }
};
