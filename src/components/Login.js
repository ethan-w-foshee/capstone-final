import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from 'cookie'

function Login(props) {
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    function testLogIn(query, queryP) {
        for(let i = 0; i < props.users.length; i++) {
            if(query == props.users[i].username) {
                if(testPassword(queryP)){
                    return true
                }
                else{
                    return false
                }
            }
            else {
                return false
            }
        }
    }

    function testPassword(query) {
        for(let i = 0; i < props.users.length; i++) {
            if(query == props.users[i].password) {
                return true
            }
            else {
                return false
            }
        }
    }

    function handleTextChange(e) {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    function login(e) {
        e.preventDefault();
        if (testLogIn(state.username, state.password) == true) {
            document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 60000 })
            navigate("/Dashboard");
        }
        else {
            navigate("/");
        }
    };

    return (
        <div className="App">
            <Container maxWidth="sm">
                <form className="login-form" onSubmit={login}>
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.username}
                        name="username"
                        label="Username"
                        type="text"
                    />
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.password}
                        name="password"
                        label="Password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        className="login-button"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Login;