import {connect} from "react-redux";

import PostAuthor from "./PostAuthor";


const mapStateToProps = (state, ownProps) => {
  const {userId} = ownProps

  const author = state.users.find(user => user.id === userId)
  return {
    author: author
  }
}

const PostAuthorContainer = connect(mapStateToProps)(PostAuthor)

export default PostAuthorContainer;