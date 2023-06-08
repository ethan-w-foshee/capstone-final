import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'
import { getAllNotes, deleteNote } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllNotes: () => dispatch(getAllNotes()),
        deleteNote: (id) => dispatch(deleteNote(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)