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
        return {
          ...state,
          newPostText: '',
          posts: [...state.posts, {id: 4, text: state.newPostText, likesCount: 0}]
        }
      }
      return state
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }
    default:
      return state
  }
}

export const addPostAction = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextAction = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
}

export default profileReducer