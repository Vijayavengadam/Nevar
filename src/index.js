import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const startApp =() => {
    ReactDOM.render(    
        <Router> 
            <App />
        </Router>,
        document.getElementById('root')
        );
}

if(window.cordova) {

    document.addEventListener('deviceready', startApp,false);
}else{
    startApp()
}
