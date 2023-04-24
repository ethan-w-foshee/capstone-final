import Login from '../components/Login'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        users: state.userlist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps)(Login)