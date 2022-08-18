import styles from './Dialogs.module.scss'

import React from "react"
import DialogsList from "../../DialogsList";
import MessagesList from "../../MessagesList";
import SendMessageForm from "../../SendMessageForm";

const Dialogs = ({dialogsPage, addMessage, setNewMessageText}) => {
  return (
    <div className={styles.dialogs}>
      <DialogsList dialogs={dialogsPage.dialogs}/>
      <MessagesList messages={dialogsPage.messages}/>
      <div className={styles.messageFormLayer}>
        <SendMessageForm newMessageText={dialogsPage.newMessageText} addMessage={addMessage} setNewMessageText={setNewMessageText}/>
      </div>
    </div>
  )
}

export default Dialogs;