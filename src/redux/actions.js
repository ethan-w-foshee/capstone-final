import axios from "axios"

export const addNote = (note) => {
    return {
        type: "ADD_NOTE",
        value: note
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        var action
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