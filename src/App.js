import React from 'react';
import {BrowserRouter as Router}from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import { DataProvider } from './components/Context';
import { ToastContainer } from 'react-toastify';



export default class App extends React.Component{
    render(){
        return(
            <DataProvider>
            <div className="app">
                <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                dark
                className="ToasT"/>
                <Router>
                    <Header />
                    <Section/>
                </Router>
            </div>
            </DataProvider>

        )
    }
}

