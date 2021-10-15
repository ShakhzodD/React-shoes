import React from 'react'
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);