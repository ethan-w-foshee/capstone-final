import { combineReducers } from 'redux'

const users = (state = [], action) => {
    switch(action.type) {
        case "GETALLUSERS":
            const users = [...state]
            return action.value
        default:
            return state
    }
}

const notes = (state = [], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, action.value]
        case "GETALLNOTES":
            const notes = [...state]
            return action.value
        default:
            return state
    }
}

const currentUser = (state = null) => state

export default combineReducers({ users, notes, currentUser })