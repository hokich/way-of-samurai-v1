import {connect} from "react-redux";

import Dialogs from "./Dialogs";
import {addMessage, setNewMessageText} from "../../../redux/slices/dialogsSlice";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessage())
    },
    setNewMessageText: (text) => {
      dispatch(setNewMessageText(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;