import React from 'react'
import {
    AppBar, Toolbar, IconButton,
    Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import cookie from "cookie";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Notes 4 U n ME
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/Dashboard">Notes</Link>
                    </li>
                    <li
                        className="nav-list-item"
                        onClick={() => {
                            document.cookie = cookie.serialize("loggedIn", null, {
                                maxAge: 0,
                            });
                            navigate("/login");
                        }}
                    >
                        Logout
                    </li>
                </ul>
            </Toolbar>
        </AppBar >
    )
}

export default Navigation