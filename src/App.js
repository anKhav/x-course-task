
import * as React from 'react';

import './normilize.css'
import AppRouter from "./AppRouter";
import Header from "./layouts/Header/Header";
import BooksProvider from "./features/providers/BooksProvider";
import UserProvider from "./features/providers/UserProvider";
import CartProvider from "./features/providers/CartProvider";
import Footer from "./layouts/Footer/Footer";
import './common.scss'


const App = () => {

        return (
            <>
                <BooksProvider>
                    <UserProvider>
                        <CartProvider>
                            <Header title='JS Band Store' authorName='Anton Khavaldzhi'/>
                                <main className='main section-outer'>
                                    <AppRouter/>
                                </main>
                            <Footer/>
                        </CartProvider>
                    </UserProvider>
                </BooksProvider>
            </>
        );
}

export default App;