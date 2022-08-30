import {createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit";
import * as axios from "axios";
// import { sub } from 'date-fns'

// [
//   {id: '1', text: 'Hello world', likesCount: 11, userId: '1', date: sub(new Date(), { minutes: 10 }).toISOString()},
//   {id: '2', text: 'Yo', likesCount: 56, userId: '1', date: sub(new Date(), { minutes: 5 }).toISOString()},
//   {id: '3', text: 'Yo Yo Yo', likesCount: 168, userId: '5', date: sub(new Date(), { minutes: 2 }).toISOString()},
// ],

const initialState = {
  wall: {
    posts: [],
    status: 'idle',
    error: null
  }
}

export const fetchPosts = createAsyncThunk('wall/posts/fetchPosts', async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/v1/posts/')
  return response.data
})

export const addNewPost = createAsyncThunk(
  'wall/posts/addNewPost',
  async initialPost => {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/posts/create/', initialPost)
    return response.data
  }
)

const postsSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.wall.posts.push(action.payload)
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            text,
            likesCount: 0,
          }
        }
      }
    },
    // addPost: state => {
    //     state.posts.push({
    //       id: nanoid(),
    //       date: new Date().toISOString(),
    //       text: state.newPostText,
    //       likesCount: 0,
    //       userId: state.currentUserId
    //     })
    // },
    incrementPostLikes: (state, action) => {
      const postId = action.payload
      const existingPost = state.wall.posts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.likesCount++
      }
    },
    editPost: (state, action) => {
      const { id, text } = action.payload
      const existingPost = state.wall.posts.find(post => post.id === id)
      if (existingPost) {
        existingPost.text = text
      }
    },
    // setNewPostText: (state, action) => {
    //   state.newPostText = action.payload
    // },
    // setCurrentUserId: (state, action) => {
    //   state.currentUserId = action.payload
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.wall.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.wall.status = 'succeeded'
        // Add any fetched posts to the array
        state.wall.posts = state.wall.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.wall.status = 'failed'
        state.wall.error = action.error.message
      })
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.wall.posts.push(action.payload)
    })
  }
})

export const selectPosts = (state) => {
  return state.profilePage.wall.posts
}

// export const selectNewPostText = (state) => {
//   return state.profilePage.newPostText
// }

// export const selectCurrentUserId = (state) => {
//   return state.profilePage.currentUserId
// }

export const selectPost = (state, id) => {
  return state.profilePage.wall.posts.find(post => post.id === id)
}

export const { addPost, editPost, incrementPostLikes } = postsSlice.actions

export default postsSlice.reducer