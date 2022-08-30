import styles from "./AddPostForm.module.scss";

import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import {addNewPost} from "../../redux/slices/profileSlice";

const AddPostForm = ({addPost, userId}) => {
  const [heading, setHeading] = useState('')
  const [content, setContent] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const dispatch = useDispatch()
  const canSave = [heading, content].every(Boolean) && addRequestStatus === 'idle'

  const addPostClick = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewPost({ heading, content })).unwrap()
        setHeading('')
        setContent('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <div className={styles.addPostForm}>
      <input type='text' onChange={(event) => setHeading(event.target.value)} value={heading} />
      <textarea onChange={(event) => setContent(event.target.value)} value={content} />
      <button onClick={addPostClick}>Добавить</button>
    </div>
  )
}

export default AddPostForm
