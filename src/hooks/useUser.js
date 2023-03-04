import { useContext } from "react";
import {UserContext} from "../features/context/UserContext";

export function useUser() {
    return useContext(UserContext);
}