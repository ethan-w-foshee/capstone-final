import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'

import Dashboard from './components/Dashboard'
import Login from './components/Login'

// Check Auth Function
function checkAuth() {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false;
}

// Protected Route Function
function ProtectedRoute(props) {
    const { component: Component, ...rest } = props;

    return (
        checkAuth() === true ? (< Component {...rest} />) : (<Navigate to="/login" />)
    )
}

const Router = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    );
};

export default Router;