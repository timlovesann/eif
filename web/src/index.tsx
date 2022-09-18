import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppSideBar from './AppSideBar';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        <AppSideBar/>
    </BrowserRouter>, 
    document.getElementById('root')
);
serviceWorker.unregister();
