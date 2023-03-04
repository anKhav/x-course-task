import { useContext } from "react";
import {BooksContext} from "../features/context/BooksContext";

export function useBooks() {
    return useContext(BooksContext);
}