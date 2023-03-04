import * as React from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {useEffect} from "react";
import Books from "./pages/Books/Books";
import {BOOKS_ROUTE, INDEX_ROUTE} from "./utils/consts";
import {useUser} from "./hooks/useUser";


const AppRouter = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const {user} = useUser()
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