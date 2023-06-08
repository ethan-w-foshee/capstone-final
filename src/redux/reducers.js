import { combineReducers } from 'redux'

const users = (state = [], action) => {
    switch (action.type) {
        case "CREATE_SUCCESS":
            return {
                ...state,
                users: [...state.users, action.user],
                error: null
            };
        case "GETALLUSERS":
            // const users = [...state]
            return action.value
        default:
            return state
    }
}

const notes = (state = [], action) => {
    switch (action.type) {
        case "CREATE_SUCCESS":
            return {
                ...state,
                notes: [...state.notes, action.note],
            };
        case "GETALLNOTES":
            // const notes = [...state]
            return action.value
        default:
            return state
    }
}

export default combineReducers({ users, notes })