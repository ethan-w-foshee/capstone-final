import CreateAccount from "../components/CreateAccount";
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (username, password, id) => dispatch(addUser(username, password, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)