import React, { useState } from "react";
import cookie from 'cookie'
import { useNavigate } from "react-router-dom";
import { TextField, Button, Modal, Box, Dialog, DialogTitle } from "@mui/material";

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

function CreateAccount(props) {
    const [anchorEl, setAnchorEl] = React.useState(false);
    let id = props.users.length
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [username, setUsername] = useState("")
    const [conUsername, setConUsername] = useState("")
    const [password, setPass] = useState("")
    const [conPass, setConPass] = useState("")

    function createAcc(e) {
        e.preventDefault()
        if (username === conUsername && password === conPass) {
            props.addUser(username, password, id)
            document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 6000 })
            document.cookie = cookie.serialize("username", `${username}`, { maxAge: 6000 })
            navigate("/Dashboard");
        }
        else {
            popHandleOpen()
        }
    }

    const popHandleOpen = () => {
        setAnchorEl(true)
    }

    const popHandleClose = () => {
        setAnchorEl(false);
    };

    const popOpen = Boolean(anchorEl);

    return (
        <div>
            <Button onClick={handleOpen} style={{ color: 'white', backgroundColor: '#bb33ff', display: 'flex', marginTop: "auto", marginBottom: ".25vh" }} variant='contained'>Create New Account</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="create-account"
            >
                <Box sx={{ ...style }}>
                    <h2 id="child-modal-title">Create a new account</h2>
                    <form className="login-form" onSubmit={createAcc}>
                        <TextField
                            required
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            name="username"
                            label="Username"
                            type="text"
                            style={{ backgroundColor: "whitesmoke", borderRadius: '5px' }}
                        />
                        <TextField
                            required
                            onChange={e => setConUsername(e.target.value)}
                            value={conUsername}
                            name="confirm-username"
                            label="Confirm username"
                            type="text"
                            style={{ backgroundColor: "whitesmoke", borderRadius: '5px' }}
                        />
                        <TextField
                            required
                            onChange={e => setPass(e.target.value)}
                            value={password}
                            name="password"
                            label="Password"
                            type="password"
                            style={{ backgroundColor: "whitesmoke", borderRadius: '5px' }}
                        />
                        <TextField
                            required
                            onChange={e => setConPass(e.target.value)}
                            value={conPass}
                            name="confirm-password"
                            label="Confirm password"
                            type="password"
                            style={{ backgroundColor: "whitesmoke", borderRadius: '5px' }}
                        />
                        <Button
                            type="submit"
                            className="login-button"
                            style={{ color: 'white', backgroundColor: '#bb33ff', display: 'flex', marginTop: "auto", marginBottom: ".25vh" }} variant='contained'
                        >
                            Create Account
                        </Button >
                        <Dialog
                            open={popOpen}
                            onClose={popHandleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Username or password does not match."}
                            </DialogTitle>
                        </Dialog>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default CreateAccount;