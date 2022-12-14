import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";


const Router = () => {
    return (
        <Routes>
            <>
                {publicRoutes.map((item,i) => <Route key={i} path={item.path} element={item.element}/>)}
            </>
        </Routes>
    );
};

export default Router;