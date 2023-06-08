import React from 'react'
import {
    AppBar, Toolbar,
    Typography
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import cookie from "cookie";

const Navigation = () => {
    const navigate = useNavigate();
    const cookies = cookie.parse(document.cookie)

    return (
        <AppBar position="relative" style={{ backgroundColor: '#444444' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Notes 4 U n ME
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/Dashboard">Notes</Link>
                    </li>
                    <li className='nav-list-item'>
                        <Link to="/makeanote">Create</Link>
                    </li>
                    {cookies["loggedIn"] === 'true' ?
                        <li className="nav-list-item"
                            onClick={() => {
                                document.cookie = cookie.serialize("loggedIn", null, {
                                    maxAge: 0,
                                });
                                document.cookie = cookie.serialize("username", null, {
                                    maxAge: 0,
                                });
                                navigate("/");
                            }}>
                            Logout of {cookies["username"]}</li> :
                        <li onClick={() => { navigate("/"); }} className="nav-list-item">
                            Login </li>}
                </ul>
            </Toolbar>
        </AppBar >
    )
}

export default Navigation