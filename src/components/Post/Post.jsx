import styles from "./Post.module.scss";


const Post = ({text, likesCount}) => (
  <div className={styles.post}>
    <img className={styles.avatar} width={50} height={50} src='/logo192.png' alt=''/>
    <span className={styles.text}>{text}</span>
    <span className={styles.likesCount}>{likesCount} Likes</span>
  </div>
)

export default Post