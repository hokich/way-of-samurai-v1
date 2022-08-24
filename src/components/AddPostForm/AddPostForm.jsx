import styles from "./AddPostForm.module.scss";

import React, {useState} from "react";

const AddPostForm = ({addPost, userId}) => {
  const [text, setText] = useState('')

  const addPostClick = () => {
    setText('')
    addPost(text, userId)
  }

  const onPostChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div className={styles.addPostForm}>
      <textarea onChange={onPostChange} value={text} />
      <button onClick={addPostClick}>Добавить</button>
    </div>
  )
}

export default AddPostForm
