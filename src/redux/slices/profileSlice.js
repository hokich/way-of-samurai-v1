import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {id: '1', text: 'Hello world', likesCount: 11, userId: '1'},
    {id: '2', text: 'Yo', likesCount: 56, userId: '1'},
    {id: '3', text: 'Yo Yo Yo', likesCount: 168, userId: '5'},
  ],
  newPostText: '',
  currentUserId: '1'
}

const postsSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    addPost: state => {
        state.posts.push({
          id: nanoid(),
          text: state.newPostText,
          likesCount: 0,
          userId: state.currentUserId
        })
    },
    editPost: (state, action) => {
      const { id, text } = action.payload
      const existingPost = state.posts.find(post => post.id === id)
      if (existingPost) {
        existingPost.text = text
      }
    },
    setNewPostText: (state, action) => {
      state.newPostText = action.payload
    },
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload
    }
  }
})

export const selectPosts = (state) => {
  return state.profilePage.posts
}

export const selectNewPostText = (state) => {
  return state.profilePage.newPostText
}

export const selectCurrentUserId = (state) => {
  return state.profilePage.currentUserId
}

export const selectPost = (state, id) => {
  return state.profilePage.posts.find(post => post.id === id)
}

export const { addPost, editPost, setNewPostText, setCurrentUserId } = postsSlice.actions

export default postsSlice.reducer