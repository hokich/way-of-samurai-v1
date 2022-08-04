const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
  dialogs: [
    {
      id: 1,
      userId: 56,
      userName: 'Timur',
      messages: [
        {
          id: 1,
          text: 'Yo',
        },
        {
          id: 2,
          text: 'Hello'
        },
        {
          id: 3,
          text: 'How are you?'
        },
        {
          id: 4,
          text: 'Hello'
        },
      ]
    }
  ],
  _newMessageText: '',
  _selectedDialogId: 1,
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.newMessageText) {
        let newMessage = {
          id: 5,
          text: state.newMessageText
        }
        state.dialogs[0].messages.push(newMessage)
        state.newMessageText = ''
      }
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = (dialogId) => {
  return {
    type: ADD_MESSAGE,
    dialogId: dialogId
  }
}

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default dialogsReducer