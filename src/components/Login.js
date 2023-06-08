import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Modal, Box } from "@mui/material";
import cookie from 'cookie'
import CreateAccount from "../containers/CreateAccount";
import { getAllUsers } from '../redux/actions';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

// Basically the CSS
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'whitesmoke',
    backgroundColor: '#6a1b9a',
    border: '2px solid #4a126b',
    borderRadius: "5px",
    pt: 2,
    px: 4,
    pb: 3,
};

// Log in functionality
function Login(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: "",
        password: "",
        currentUser: ""
    });

    useEffect(() => {
        async function fetchData() {
            await dispatch(getAllUsers())
        }
        fetchData()
    }, [dispatch]);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function testLogIn(query, queryP) {
        for (let i = 0; i < props.users.length; i++) {
            if (query === props.users[i].user_name) {
                if (testPassword(queryP, props.users)) {
                    return true
                }
            }
        }
    }

    function testPassword(query, users) {
        for (let i = 0; i < users.length; i++) {
            if (query === users[i].passwords) {
                return true
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
        if (testLogIn(state.username, state.password) === true) {
            document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 6000 })
            document.cookie = cookie.serialize("username", `${state.username}`, { maxAge: 6000 })
            navigate("/Dashboard");
        }
        else {
            handleOpen()
        }
    };

    return (
        <div className="App">
            <Container maxWidth="sm">
                <form className="login-form" onSubmit={login}>
                    <TextField
                        onChange={handleTextChange}
                        value={state.username}
                        name="username"
                        label="Username"
                        type="text"
                    />
                    <TextField
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
                        style={{ color: 'white', backgroundColor: '#bb33ff', display: 'flex', marginTop: "auto", marginBottom: ".25vh" }}
                        onClick={props.getAllUsers}
                    >
                        Login / Create account
                    </Button >
                </form>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="u-or-p-incorrect"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Username or Password Incorrect</h2>
                        <p id="u-or-p-incorrect">
                            Double check your log in info, or create a new account with us
                        </p>
                        <CreateAccount />
                    </Box>
                </Modal>
            </Container>
        </div>
    );
};

export default Login;