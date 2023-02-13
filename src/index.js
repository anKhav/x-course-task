import * as React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter, HashRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);