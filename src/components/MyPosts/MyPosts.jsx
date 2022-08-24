import styles from "./MyPosts.module.scss";

import Post from '../Post'
import PostContainer from "../Post/PostContainer";

const MyPosts = ({posts}) => {

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const postsItems = orderedPosts.map((post) => (
    <PostContainer key={post.id} postId={post.id}/>
  ))

  return (
    <div className={styles.posts} style={{marginTop: 20}}>
      {postsItems}
    </div>
  )
}

export default MyPosts;