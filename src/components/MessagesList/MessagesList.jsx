import styles from './MessagesList.module.scss'

const MessagesList = ({messages}) => {
  return (
    <div className={styles.messagesList}>
      {messages.map((message) => (
        <span key={message.id} className={styles.message}>{message.text}</span>
      ))}
    </div>
  )
}

export default MessagesList