
import * as React from 'react';

import './main.css'
import AppRouter from "./AppRouter";
import {createContext} from "react";
import Header from "./layouts/Header/Header";
import BooksProvider from "./features/providers/BooksProvider";
import UserProvider from "./features/providers/UserProvider";
import SpecificBookProvider from "./features/providers/SpecificBookProvider";
import CartProvider from "./features/providers/CartProvider";

export const isLoginContext = React.createContext({})
export const BoContext = createContext(null)

const App = () => {

        return (
            <>
                <BooksProvider>
                    <UserProvider>
                        <Header title='JS Band Store' authorName='Anton Khavaldzhi'/>
                        <SpecificBookProvider>
                            <CartProvider>
                                <AppRouter/>
                            </CartProvider>
                        </SpecificBookProvider>
                    </UserProvider>
                </BooksProvider>
            </>
        );
}

export default App;