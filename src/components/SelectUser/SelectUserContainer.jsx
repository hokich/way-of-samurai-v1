import {connect} from "react-redux";

import {setCurrentUserId} from "../../redux/slices/profileSlice";
import SelectUser from "./SelectUser";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    selectedUserId: state.profilePage.currentUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedUser: (userId) => {
      dispatch(setCurrentUserId(userId))
    }
  }
}

const SelectUserContainer = connect(mapStateToProps, mapDispatchToProps)(SelectUser)

export default SelectUserContainer;