import {connect} from "react-redux";

import Profile from "./Profile";
import {addNewPost, addPost} from "../../../redux/slices/profileSlice";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (heading, content) => {
      dispatch(addNewPost({heading, content}))
    },
    // setNewPostText: (text) => {
    //   dispatch(setNewPostText(text))
    // }
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;