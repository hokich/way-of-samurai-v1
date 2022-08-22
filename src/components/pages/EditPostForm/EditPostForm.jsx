import styles from './EditPostForm.module.scss'

import React, {useState} from "react"
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../../../redux/slices/profileSlice";

const EditPostForm = () => {
  let params = useParams();
  const postId = params.id

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const history = useHistory()

  const post = useSelector(state => state.profilePage.posts.find(post => post.id === postId))
  const [text, setText] = useState(post.text)

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  const onTextChange = event => setText(event.target.value)

  const onSavePostClick = () => {
    if (text) {
      dispatch(editPost({...post, text: text}))
      navigate(`/profile/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postText">Post Text:</label>
        <textarea
          id="postText"
          name="postText"
          placeholder="What's on your mind?"
          value={text}
          onChange={onTextChange}
        />
      </form>
      <button type="button" onClick={onSavePostClick}>
        Save Post
      </button>
    </section>
  )
}

export default EditPostForm;