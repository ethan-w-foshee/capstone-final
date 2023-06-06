import axios from "axios"

export const addNote = (thisNote) => {
    return (dispatch) => {
        axios.post(`http://localhost:4000/notes`, {
            id: thisNote.id,
            note: thisNote.note,
            title: thisNote.title,
            recipient: thisNote.recipient
        })
            .then(response => {
                dispatch({
                    type: 'CREATE_SUCCESS',
                    note: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'CREATE_ERROR',
                    error
                })
            })
    }
}

export const addUser = (username, password, id) => {
    return (dispatch) => {
        axios.post(`http://localhost:4000/users`, {
            username: username,
            password: password,
            id: id
        })
            .then(response => {
                dispatch({
                    type: 'CREATE_SUCCESS',
                    username: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'CREATE_ERROR',
                    error
                })
            })
    }
}

export const getAllNotes = () => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/notes`)
            .then(response => {
                dispatch({
                    type: 'GETALLNOTES',
                    value: response.data
                })
            })
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/users`)
            .then(response => {
                dispatch({
                    type: 'GETALLUSERS',
                    value: response.data
                })
            })
    }
}