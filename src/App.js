import React, {useEffect} from 'react';
import './App.css';
import './normilize.css'
import Header from "./components/layout/Header/Header";
import './reset.css'
import Router from "./routes/router";
import {getUser} from "./features/User/userSlice";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    useEffect(() => {
        dispatch(getUser())
    }, [])
  return (
    <div className="App">
        <Header user={user}/>
        <Router/>
    </div>
  );
}

export default App;
