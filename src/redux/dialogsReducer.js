const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
  dialogs: [
    { id: 1, userName: 'Timur' },
    { id: 2, userName: 'Pavel' },
    { id: 3, userName: 'Dmitriy' }
  ],
  messages: [
    { id: 1, text: 'Yo' },
    { id: 2, text: 'Hello' },
    { id: 3, text: 'How are you?' },
    { id: 4, text: 'Hello' }
  ],
  newMessageText: '',
  selectedDialogId: 1,
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.newMessageText) {
        return {
          ...state,
          newMessageText: '',
          messages: [...state.messages, { id: 5, text: state.newMessageText }]
        }
      }
      return state
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.text
      }
    }
    default:
      return state
  }
}

export const addMessageAction = (dialogId) => {
  return {
    type: ADD_MESSAGE,
    dialogId: dialogId
  }
}

export const updateNewMessageTextAction = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
  }
}

export default dialogsReducer