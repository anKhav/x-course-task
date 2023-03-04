import {useReducer} from "react";
import {UserContext} from "../context/UserContext";
import {userReducer} from "../reducers/UserReducer";
import {getUser} from "../../services/UserService";
import {LOGIN} from "../actions";

const initialState = getUser() || {};
const UserProvider = ({children}) => {
    const [user, userDispatch] = useReducer(userReducer, initialState)
    const value = {user, userDispatch}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
export default UserProvider