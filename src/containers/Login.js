import Login from '../components/Login'
import { connect } from 'react-redux'
import { getAllUsers } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)