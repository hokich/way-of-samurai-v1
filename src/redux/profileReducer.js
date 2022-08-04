const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
  posts: [
    {
      id: 1,
      text: 'Hello world',
      likesCount: 11
    },
    {
      id: 2,
      text: 'Yo',
      likesCount: 56
    },
    {
      id: 3,
      text: 'Yo Yo Yo',
      likesCount: 168
    },
  ],
  newPostText: 'hello',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText) {
        let newPost = {
          id: 4,
          text: state.newPostText,
          likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''
      }
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer