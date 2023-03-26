import {deleteUser, setUser} from "../../services/UserService";
import {clearCart} from "../../services/CartService";
import {LOGIN, LOGOUT} from "../actions";

export function userReducer(state, action) {
    switch (action.type) {
        case LOGIN: {
            setUser(action.payload)

            return action.payload
        }
        case LOGOUT: {
            clearCart()
            deleteUser()
            return {}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}