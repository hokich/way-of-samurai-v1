import { configureStore } from '@reduxjs/toolkit'

import profileReducer from "./slices/profileSlice";
import dialogsReducer from "./slices/dialogsSlice";
import usersReducer from './slices/usersSlice'


export default configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer
  }
})