import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUsers, updateUser } from '../services/UserService.service'

export const fetchUserList = createAsyncThunk('users/fetchUsers', async () => fetchUsers())
export const updateUserData = createAsyncThunk('users/updateUser', async (user: User) => updateUser(user))

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    userCreated(state: any, action: any) {
      state.entities.push(action.payload)
    },
    userUpdated(state: any, action: any) {
      const user: User = action.payload
      const existingUser: any = state.entities.find((u: User) => u.id === user.id)
      if (existingUser) {
        existingUser.firstName = user.firstName
        existingUser.lastName = user.lastName
        existingUser.email = user.email
      }
    },
    userDeleted(state: any, action: any) {
      const newEntities = state.entities.filter((user: User) => user.id !== action.payload)
      state.entities = newEntities
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserList.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchUserList.fulfilled, (state, action) => {
      state.loading = false
      state.entities = action.payload
    })

    builder.addCase(fetchUserList.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export const { userCreated, userUpdated, userDeleted } = usersSlice.actions

export default usersSlice.reducer
