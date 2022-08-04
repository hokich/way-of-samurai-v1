import styles from "./SendMessageForm.module.scss";

import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

const SendMessageForm = ({newMessageText, dispatch}) => {
  const messageField = React.createRef()

  const sendMessageClick = () => {
    const action = addMessageActionCreator()
    dispatch(action)
  }

  const onMessageChange = (event) => {
    const action = updateNewMessageTextActionCreator(event.target.value)
    dispatch(action)
  }

  return (
    <div className={styles.sendMessageForm}>
      <textarea ref={messageField} onChange={onMessageChange} value={newMessageText} />
      <button onClick={sendMessageClick}>Отправить</button>
    </div>
  )
}

export default SendMessageForm