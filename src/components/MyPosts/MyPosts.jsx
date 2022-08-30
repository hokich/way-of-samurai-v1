import styles from "./MyPosts.module.scss";

import Post from '../Post'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPosts, selectPosts} from "../../redux/slices/profileSlice";


const MyPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)

  const postStatus = useSelector(state => state.profilePage.wall.status)
  const error = useSelector(state => state.profilePage.wall.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <span>Loading...</span>
  } else if (postStatus === 'succeeded') {
    content = posts.map(post => (
      <Post key={post.id} id={post.id} title={post.heading} content={post.content} likesCount={post.likes} date={post.publish_date}/>
    ))
  } else if (postStatus === 'failed') {
    content = <span>{error}</span>
  }

  return (
    <div className={styles.posts} style={{marginTop: 20}}>
      {content}
    </div>
  )
}

export default MyPosts;