import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'
import { getAllNotes } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllNotes: () => dispatch(getAllNotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)