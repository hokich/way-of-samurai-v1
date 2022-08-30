import styles from './Likes.module.scss'

const Likes = ({count, addLikes}) => {

  // const incrementLikes = () => {
  //   addLikes()
  // }
  return (
    <div className={styles.likes}>
      <button className={styles.button}>+</button>
      <span className={styles.count}>{count}</span>
    </div>
  )
}

export default Likes