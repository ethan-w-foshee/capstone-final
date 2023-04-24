import React from 'react';
import Navigation from './components/Navigation.js'
import Router from './Router.js'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store.js';

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Navigation />
                <Router />
            </HashRouter>
        </Provider>
    );
}

export default App;