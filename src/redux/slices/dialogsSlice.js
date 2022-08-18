import {createSlice} from "@reduxjs/toolkit";

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
}

const dialogsSlice = createSlice({
  name: 'dialogsPage',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({id: 5, text: state.newMessageText})
    },
    setNewMessageText: (state, action) => {
      state.newMessageText = action.payload
    }
  }
})

export const selectMessages = (state) => {
  return state.dialogsPage.messages
}

export const { addMessage } = dialogsSlice.actions

export const selectDialogs = (state) => {
  return state.dialogsPage.dialogs
}

export const selectNewMessageText = (state) => {
  return state.dialogsPage.newMessageText
}

export const { setNewMessageText } = dialogsSlice.actions

export default dialogsSlice.reducer