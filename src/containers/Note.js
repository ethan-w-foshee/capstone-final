import { connect } from 'react-redux'
import Note from '../components/Note'

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Note)