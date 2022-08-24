import {connect} from "react-redux";

import Post from "./Post";
import {incrementPostLikes} from "../../redux/slices/profileSlice";

const mapStateToProps = (state, ownProps) => {
  const {postId} = ownProps

  const post = state.profilePage.wall.posts.find(post => post.id === postId)
  return {
    ...post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementPostLikes: (postId) => {
      dispatch(incrementPostLikes(postId))
    }
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer;