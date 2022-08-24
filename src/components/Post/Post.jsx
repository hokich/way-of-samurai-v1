import styles from "./Post.module.scss";
import {Link} from "react-router-dom";
// import PostAuthorContainer from "../PostAuthor/PostAuthorContainer";
import TimeAgo from "../TimeAgo/TimeAgo";
import Likes from "../Likes/Likes";


const Post = ({id, text, likesCount, date, incrementPostLikes}) => {
  return (
    <div className={styles.post}>
      <img className={styles.avatar} width={50} height={50} src='/logo192.png' alt=''/>
      <span className={styles.text}>{text}</span>
      <Likes count={likesCount} addLikes={() => incrementPostLikes(id)}/>
      <Link to={`/profile/posts/${id}`} className={styles.link}>Смотреть пост</Link>
      <div className={styles.authorLayer}>
        {/*<PostAuthorContainer userId={userId}/>*/}
        <TimeAgo timestamp={date}/>
      </div>
    </div>
  )
}

export default Post