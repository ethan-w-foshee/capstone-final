import React from 'react'
import { getAllNotes } from '../redux/actions';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {
    Button,
    TextField,
    DialogTitle,
    Modal,
    Box
} from '@mui/material'

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

function MakeANote(props) {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [note, setNote] = React.useState('');
    const [recipient, setRecipient] = React.useState('');
    let id = props.notes.length - 1
    const dispatch = useDispatch()
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        id = id + 1
        e.preventDefault();
        const newNote = {
            open: open,
            title: title,
            note: note,
            recipient: recipient,
            id: id
        };
        props.addNote(newNote);
        setOpen(!open);
    };

    const handleChange = (event) => {
        if (event.target.id === 'title') {
            setTitle(event.target.value);
        } else if (event.target.id === 'note') {
            setNote(event.target.value);
        } else if (event.target.id === 'recipient') {
            setRecipient(event.target.value);
        }
    };

    React.useEffect(() => {
        async function fetchData() {
            await dispatch(getAllNotes())
        }
        fetchData()
        if (open !== open) {
            setTitle('');
            setNote('');
            setRecipient('');
        }
    });

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Write a note:</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                <DialogTitle style={{ textAlign: 'center' }}>Add New Note</DialogTitle>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', width: '350px', alignSelf: 'center' }}>
                    <TextField
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={handleChange}
                        required />
                    <TextField
                        id="note"
                        placeholder="Note"
                        value={note}
                        onChange={handleChange}
                        required />
                    <TextField
                        id="recipient"
                        placeholder="Recipient"
                        value={recipient}
                        onChange={handleChange}
                        required />
                    <br />
                    <Button style={{ color: 'white', backgroundColor: '#bb33ff' }} variant='contained' type='submit'>
                        Submit
                    </Button>

                </form>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="u-or-p-incorrect"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Note Created!</h2>
                        <Button style={{ color: 'white', backgroundColor: '#bb33ff' }} variant='contained'>
                        <Link to={'/Dashboard'}>See the dashboard</Link>
                    </Button>
                    </Box>
                </Modal>
            </div>
        </>
    );
}

export default MakeANote