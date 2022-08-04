import styles from './Dialogs.module.scss'

import React from "react"
import DialogsList from "../../DialogsList";
import MessagesList from "../../MessagesList";
import SendMessageForm from "../../SendMessageForm";

const Dialogs = ({dialogsPage, dispatch}) => {
  return (
    <div className={styles.dialogs}>
      <DialogsList dialogs={dialogsPage.dialogs}/>
      <MessagesList messages={dialogsPage.dialogs[0].messages}/>
      <div className={styles.messageFormLayer}>
        <SendMessageForm newMessageText={dialogsPage.newMessageText} dispatch={dispatch}/>
      </div>
    </div>
  )
}

export default Dialogs;