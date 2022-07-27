import {renderTree} from "./render";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: 'Hello world',
        likesCount: 11
      },
      {
        id: 2,
        message: 'Yo',
        likesCount: 56
      },
      {
        id: 3,
        message: 'Yo Yo Yo',
        likesCount: 168
      },
    ],
    newPostText: 'Hello'
  }
}

export const addPost = () => {
  state.profilePage.posts.push({
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0
  })
  state.profilePage.newPostText = ''
  renderTree(state)
}

export const setNewPostText = (text) => {
  state.profilePage.newPostText = text
  renderTree(state)
}

export default state