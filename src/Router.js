import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'

// Pages to import
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Note from './containers/Note'
import MakeANote from './containers/MakeANote'

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
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<Login />}/>
            <Route path="/makeanote" element={<ProtectedRoute component={MakeANote}/>}/>
            <Route path='/note/:id' element={<Note/>}/>
        </Routes>
    );
};

export default Router;