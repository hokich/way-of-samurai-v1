import styles from "./Post.module.scss";
import {Link} from "react-router-dom";
import PostAuthorContainer from "../PostAuthor/PostAuthorContainer";


const Post = ({id, text, likesCount, userId}) => (
  <div className={styles.post}>
    <img className={styles.avatar} width={50} height={50} src='/logo192.png' alt=''/>
    <span className={styles.text}>{text}</span>
    <span className={styles.likesCount}>{likesCount} Likes</span>
    <Link to={`/profile/posts/${id}`} className={styles.link}>Смотреть пост</Link>
    <div className={styles.authorLayer}>
        <PostAuthorContainer userId={userId}/>
    </div>
  </div>
)

export default Post