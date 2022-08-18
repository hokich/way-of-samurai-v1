import { configureStore } from '@reduxjs/toolkit'

import profileReducer from "./slices/profileSlice";
import dialogsReducer from "./slices/dialogsSlice";


export default configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
  }
})