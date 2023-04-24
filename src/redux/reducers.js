import { combineReducers } from 'redux'

const userlist = (state = null) => state

const notes = (state = [], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, action.value]
        default:
            return state
    }
}

const currentUser = (state = null) => state

export default combineReducers({ userlist, notes, currentUser })