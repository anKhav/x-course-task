import * as React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {getUser} from "./services/UserService";
import {useUser} from "./features/context/UserContext";


const AppRouter = () => {
    const {user} = useUser()
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