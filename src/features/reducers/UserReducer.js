import {deleteUser, setUser} from "../../services/UserService";
import {deleteSpecificBook} from "../../services/SpecificBookService";
import {clearCart} from "../../services/CartService";

export function userReducer(state, action) {
    switch (action.type) {
        case 'login': {
            setUser(action.payload)

            return action.payload
        }
        case 'logout': {
            deleteSpecificBook()
            clearCart()
            deleteUser()
            return {}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}