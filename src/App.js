
import * as React from 'react';

import './main.css'
import AppRouter from "./AppRouter";
import Header from "./layouts/Header/Header";
import BooksProvider from "./features/providers/BooksProvider";
import UserProvider from "./features/providers/UserProvider";
import SpecificBookProvider from "./features/providers/SpecificBookProvider";
import CartProvider from "./features/providers/CartProvider";
import Footer from "./layouts/Footer/Footer";


const App = () => {

        return (
            <>
                <BooksProvider>
                    <UserProvider>
                        <CartProvider>
                            <Header title='JS Band Store' authorName='Anton Khavaldzhi'/>
                            <SpecificBookProvider>
                                <main className='main'>
                                    <AppRouter/>
                                </main>
                            </SpecificBookProvider>
                            <Footer/>
                        </CartProvider>
                    </UserProvider>
                </BooksProvider>
            </>
        );
}

export default App;