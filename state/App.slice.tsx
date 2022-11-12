import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    confirm: {
      title: null,
      message: null,
      onSubmit: null,
      dismissable: true,
    },
    snackbar: {
      message: null,
    },
  },
  reducers: {
    addConfirm(state: any, action: any) {
      state.confirm = action.payload
    },
    clearConfirm(state: any) {
      state.confirm = {
        title: null,
        message: null,
        onSubmit: null,
      }
    },
    addSnackbar(state: any, action: any) {
      state.snackbar.message = action.payload
    },
    clearSnackbar(state: any) {
      state.snackbar = {
        message: null,
      }
    },
  },
})

export const { addConfirm, clearConfirm, addSnackbar, clearSnackbar } = appSlice.actions

export default appSlice.reducer
