import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Paper, Divider, Chip, Typography } from "@mui/material";


const Note = (props) => {
    const noteId = useParams().id
    const thisNote = props.notes.find((note) => note.id === Number(noteId))
    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="note-paper">
                <h1>{thisNote.title}</h1>
                <div>To: <u>{thisNote.recipient}</u></div>
                <Divider textAlign='left'><Chip label="NOTE" /></Divider>
                <span>{thisNote.note}</span>
                <br/>By: <u>{thisNote.author}</u>
                <Divider textAlign='right'><Chip label="DATE" /></Divider>
                <Typography textAlign='right'>{thisNote.date}</Typography>
            </Paper>
        </Container>
    )
}

export default Note