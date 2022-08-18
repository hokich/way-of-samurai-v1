import styles from './Profile.module.scss'

import React from "react"

import MyPosts from "../../MyPosts";
import AddPostForm from "../../AddPostForm";

const Profile = ({profilePage, addPost, setNewPostText}) => {
  return (
    <div className={styles.profile}>
      <div className="head-image">
        <img className="image" src="/images/head-profile.jpg" alt=""/>
      </div>
      <div>
        ava + description
      </div>
      <div className={styles.wall}>
        <AddPostForm
          newPostText={profilePage.newPostText}
          addPost={addPost}
          setNewPostText={setNewPostText}
        />
        <MyPosts posts={profilePage.posts}/>
      </div>
    </div>
  )
}

export default Profile;