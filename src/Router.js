import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
// Pages to import
import Dashboard from './containers/Dashboard'
import Login from './components/Login'
import Note from './containers/Note'

// Check Auth Function
function checkAuth() {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false;
}

// Protected Route Function
function ProtectedRoute(props) {
    const { component: Component, ...rest } = props;

    return (
        checkAuth() === true ? (< Component {...rest} />) : (<Navigate to="/" />)
    )
}

const Router = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/" element={<Login />}/>
            <Route path='/note/:id' element={<Note/>}/>
        </Routes>
    );
};

export default Router;