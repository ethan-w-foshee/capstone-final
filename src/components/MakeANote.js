import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material'

class MakeANote extends Component {

    state = {
        open: false,
        title: '',
        note: '',
        recipient: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const note = { ...this.state }
        note.id = this.props.noteTotal + 1
        delete note.open
        console.log("THE NOTE", note)
        this.props.addNote(note)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                note: '',
                title: '',
                recipient: '',
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Write a note:</h1>
                    <Button
                        variant="contained"
                        className="add-note"
                        onClick={this.toggleDialog}
                    >
                        Create
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Note</DialogTitle>
                        <DialogContent>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="title"
                                    placeholder="Title"
                                    value={this.state.Title}
                                    onChange={this.handleChange}
                                    required />
                                <TextField
                                    id="note"
                                    placeholder="Note"
                                    value={this.state.Note}
                                    onChange={this.handleChange}
                                    required />
                                <TextField
                                    id="recipient"
                                    placeholder="Recipient"
                                    value={this.state.Recipient}
                                    onChange={this.handleChange}
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default MakeANote