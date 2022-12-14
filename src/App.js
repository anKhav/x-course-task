import React from 'react';
import './App.css';
import './normilize.css'
import Header from "./components/layout/Header/Header";
import Authorization from "./views/Authorization/Authorization";
import Input from "./components/forms/Input/Input";
import './reset.css'
import Router from "./routes/router";

function App() {
  return (
    <div className="App">
        <Header/>
        <Router/>
    </div>
  );
}

export default App;
