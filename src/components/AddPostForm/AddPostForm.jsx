import styles from "./AddPostForm.module.scss";

import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";

const AddPostForm = ({newPostText, dispatch}) => {
  const addPostField = React.createRef()

  const addPostClick = () => {
    dispatch(addPostActionCreator())
  }

  const onPostChange = (event) => {
    const action = updateNewPostTextActionCreator(event.target.value)
    dispatch(action)
  }

  return (
    <div className={styles.addPostForm}>
      <textarea ref={addPostField} onChange={onPostChange} value={newPostText} />
      <button onClick={addPostClick}>Добавить</button>
    </div>
  )
}

export default AddPostForm