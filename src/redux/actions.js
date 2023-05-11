import axios from "axios"

export const addNote = (note) => {
    return {
        type: "ADD_NOTE",
        value: note
    }
}

export const getAllNotes = () => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/notes`)
            .then(response => {
                const action = {
                    type: 'GETALLNOTES',
                    value: response.data
                }
                dispatch(action)
            })

    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/users`)
            .then(response => {
                const action = {
                    type: 'GETALLUSERS',
                    value: response.data
                }
                dispatch(action)
            })

    }
}