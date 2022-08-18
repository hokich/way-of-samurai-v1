import {connect} from "react-redux";

import Profile from "./Profile";
import {addPost, setNewPostText} from "../../../redux/slices/profileSlice";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPost())
    },
    setNewPostText: (text) => {
      dispatch(setNewPostText(text))
    }
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;