import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {id: 1, text: 'Hello world', likesCount: 11},
    {id: 2, text: 'Yo', likesCount: 56},
    {id: 3, text: 'Yo Yo Yo', likesCount: 168},
  ],
  newPostText: '',
}

const postsSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    addPost: state => {
      state.posts.push({id: 4, text: state.newPostText, likesCount: 0})
    },
    setNewPostText: (state, action) => {
      state.newPostText = action.payload
    }
  }
})

export const selectPosts = (state) => {
  return state.profilePage.posts
}

export const { addPost } = postsSlice.actions

export const selectNewPostText = (state) => {
  return state.profilePage.newPostText
}

export const { setNewPostText } = postsSlice.actions

export default postsSlice.reducer