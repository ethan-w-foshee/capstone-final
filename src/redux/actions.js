import axios from "axios"
require('dotenv').config()

const URL = process.env.AXIOSURL

export const addNote = (thisNote) => {
    return (dispatch) => {
        axios.post(`${URL}/notes`, {
            id: thisNote.id,
            note: thisNote.note,
            title: thisNote.title,
            recipient: thisNote.recipient,
            author: thisNote.author,
            doc: thisNote.doc,
            isHidden: 0
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
        axios.post(`${URL}/users`, {
            username: username,
            password: password,
            id: id
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
        axios.get(`${URL}/notes`)
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
        axios.get(`${URL}/users`)
            .then(response => {
                dispatch({
                    type: 'GETALLUSERS',
                    value: response.data
                })
            })
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        axios.delete(`${URL}/notes/${id}`)
        .then(response => {
            dispatch({
                type: 'DELETE_SUCCESS',
                username: response.data
            })
        })
    }
}