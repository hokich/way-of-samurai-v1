import styles from "./SendMessageForm.module.scss";

import React from "react";

const SendMessageForm = ({newMessageText, addMessage, setNewMessageText}) => {
  const messageField = React.createRef()

  const sendMessageClick = () => {
    addMessage()
  }

  const onMessageChange = (event) => {
    setNewMessageText(event.target.value)
  }

  return (
    <div className={styles.sendMessageForm}>
      <textarea ref={messageField} onChange={onMessageChange} value={newMessageText} />
      <button onClick={sendMessageClick}>Отправить</button>
    </div>
  )
}

export default SendMessageForm