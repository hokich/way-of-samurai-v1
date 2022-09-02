import styles from "./Post.module.scss";
import {Link} from "react-router-dom";
import PostAuthorContainer from "../PostAuthor/PostAuthorContainer";
import TimeAgo from "../TimeAgo/TimeAgo";
import Likes from "../Likes/Likes";


const Post = ({id, title, content, likesCount, date, author}) => {
  return (
    <div className={styles.post}>
      <img className={styles.avatar} width={50} height={50} src='/logo192.png' alt=''/>
      <span className={styles.text}>{title}</span>
      <span className={styles.text}>{content}</span>
      <Likes count={likesCount}/>
      <Link to={`/profile/posts/${id}`} className={styles.link}>Смотреть пост</Link>
      <div className={styles.authorLayer}>
        <PostAuthorContainer authorId={author}/>
        <TimeAgo timestamp={date}/>
      </div>
    </div>
  )
}

export default Post