import styles from "./MyPosts.module.scss";

import Post from '../Post'

const MyPosts = ({posts}) => {
  const postsItems = posts.map((post) => (
    <Post key={post.id} text={post.text} likesCount={post.likesCount}/>
  ))

  return (
    <div className={styles.posts} style={{marginTop: 20}}>
      {postsItems}
    </div>
  )
}

export default MyPosts;