import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import appReducer from './App.slice'
import usersReducer from '../users/state/Users.slice'
import thunk from 'redux-thunk'

const logger = createLogger()
const middleware: any[] = []
middleware.push(logger)
middleware.push(thunk)

const enhancers: any[] = [...middleware]
const store = configureStore({
  reducer: {
    app: appReducer,
    users: usersReducer,
  },
  middleware: enhancers,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppTypedDispatch = ThunkDispatch<RootState, any, AnyAction>

export default store
