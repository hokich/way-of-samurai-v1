import styles from './Profile.module.scss'

import React from "react"

const Profile = (props) => {
  const addPostField = React.createRef()


  const addPostClick = () => {
    props.addPost()
  }

  const onPostChange = () => {
    const text = addPostField.current.value
    props.setNewPostText(text)
  }

  return (
    <div className={styles.profile}>
      <div className="head-image">
        {/*<img className="image" src="/images/head-profile.jpg" alt=""/>*/}
      </div>
      <div>
        ava + description
      </div>
      <div className={styles.wall}>
        <div className={styles.newPostForm}>
          <textarea ref={addPostField} onChange={onPostChange} value={props.profilePage.newPostText} />
          <button onClick={addPostClick}>Добавить</button>
        </div>
        <div className={styles.posts} style={{marginTop: 20}}>
          {props.profilePage.posts.map((post) => (
            <Post key={post.id} post={post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img className={styles.avatar} width={50} height={50} src='/logo192.png' alt=''/>
      <span className='text'>{props.post.message}</span>
      <span className={styles.likesCount}>{props.post.likesCount} Likes</span>
    </div>
  )
}

export default Profile;