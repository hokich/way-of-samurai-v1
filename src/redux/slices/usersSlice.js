import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as axios from "axios";

const initialState = []

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/users/')
    return response.data
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectAllUsers = state => state.users

export const selectUserById = (state, userId) =>
  state.users.find(user => user.id === Number(userId))

export default usersSlice.reducer