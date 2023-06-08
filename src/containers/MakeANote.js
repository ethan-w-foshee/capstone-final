import { connect } from "react-redux";
import MakeANote from "../components/MakeANote";
import { addNote } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeANote);