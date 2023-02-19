import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {UserContext} from "./features/context/UserContext";
import {useContext} from "react";


const AppRouter = () => {
    const {user} = useContext(UserContext)
    return (
        <Routes>
            {
                user && privateRoutes.map(({path, element}, index) => <Route key={index} path={path} element={element}/>)
            }
            {
                publicRoutes.map(({path, element}, index) => <Route key={index} path={path} element={element}/>)
            }
        </Routes>
    );
};

export default AppRouter;