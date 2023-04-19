import React from 'react';
import Navigation from './components/Navigation.js'
import Router from './Router.js'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Router />
        </BrowserRouter>
    );
}

export default App;