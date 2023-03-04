import { useContext } from "react";
import {CartContext} from "../features/context/CartContext";

export function useCart() {
    return useContext(CartContext);
}