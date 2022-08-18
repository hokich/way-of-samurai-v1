import styles from "./AddPostForm.module.scss";

import React from "react";

const AddPostForm = ({newPostText, addPost, setNewPostText}) => {
  const addPostClick = () => {
    addPost()
  }

  const onPostChange = (event) => {
    setNewPostText(event.target.value)
  }

  return (
    <div className={styles.addPostForm}>
      <textarea onChange={onPostChange} value={newPostText} />
      <button onClick={addPostClick}>Добавить</button>
    </div>
  )
}

export default AddPostForm
