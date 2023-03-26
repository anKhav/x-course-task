
import * as React from 'react';

import './normilize.css'
import AppRouter from "./AppRouter";
import Header from "./layouts/Header/Header";
import BooksProvider from "./features/providers/BooksProvider";
import UserProvider from "./features/providers/UserProvider";
import CartProvider from "./features/providers/CartProvider";
import Footer from "./layouts/Footer/Footer";
import './variables.scss'
import './common.scss'
import {GoogleOAuthProvider} from "@react-oauth/google";


const App = () => {

        return (
                <GoogleOAuthProvider clientId='18370924351-pu8enjfdma60m0kenj04h64u44m92bvl.apps.googleusercontent.com'>
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
                </GoogleOAuthProvider>
        );
}

export default App;