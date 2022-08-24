import {connect} from "react-redux";

import Profile from "./Profile";
import {addPost} from "../../../redux/slices/profileSlice";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPost(text))
    },
    // setNewPostText: (text) => {
    //   dispatch(setNewPostText(text))
    // }
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;