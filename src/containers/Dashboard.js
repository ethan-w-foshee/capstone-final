import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }

export default connect(mapStateToProps)(Dashboard)