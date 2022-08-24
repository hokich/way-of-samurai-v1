import styles from './SinglePostPage.module.scss'

import React from "react"
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {selectPost} from "../../../redux/slices/profileSlice";

const SinglePostPage = () => {
  let params = useParams();
  const postId = params.id

  const post = useSelector(state => selectPost(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className={styles.post}>
        <h2>{post.text}</h2>
      </article>
      <Link to={`/profile/posts/${post.id}/edit`}>
        Edit Post
      </Link>
    </section>
  )
}

export default SinglePostPage;