import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export let store = {
  _state: {
    profilePage: {
      _posts: [
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
      _newPostText: 'hello',
      getPosts() {
        return this._posts
      },
      addPost(post) {
        this._posts.push(post)
      },
      getNewPostText() {
        return this._newPostText
      },
      setNewPostText(text) {
        this._newPostText = text
      },
    },
    dialogsPage: {
      _dialogs: [
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
      getDialogs() {
        return this._dialogs
      },
      getCurrentDialog() {
        return this._dialogs.filter(dialog => dialog.id === this._selectedDialogId)[0]
      },
      addMessageToDialogById(dialogId, message) {
        // const dialogIndex = this._dialogs.findIndex(dialog => dialog.id === dialogId)
        this._dialogs[0].messages.push(message)
      },
      getNewMessageText() {
        return this._newMessageText
      },
      setNewMessageText(text) {
        this._newMessageText = text
      },
    }
  },
  _callSubscriber() {
    console.log('No subscribers')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) { // { type: 'ADD-POST' }
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}

window.store = store