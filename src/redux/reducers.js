import { combineReducers } from 'redux'

const notes = (state = [], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, action.value]
        default:
            return state
    }
}

export default combineReducers({ notes })