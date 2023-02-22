import * as React from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {UserContext} from "./features/context/UserContext";
import {useContext, useEffect} from "react";
import Books from "./pages/Books/Books";
import {BOOKS_ROUTE, INDEX_ROUTE} from "./utils/consts";


const AppRouter = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    useEffect(() => {
        if (Object.keys(user).length !== 0){
            pathname === INDEX_ROUTE && navigate(BOOKS_ROUTE)
        }
    },[pathname])
    return (
        <Routes>
            {
                Object.keys(user).length !== 0 ?
                    privateRoutes.map(({path, element}, index) => <Route key={index} path={path} element={element}/>)
                    :
                    publicRoutes.map(({path, element}, index) => <Route key={index} path={path} element={element}/>)
            }
            {
                Object.keys(user).length !== 0 && <Route index element={<Books/>}/>
            }

        </Routes>
    );
};

export default AppRouter;