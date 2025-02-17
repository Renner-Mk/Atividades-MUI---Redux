import { configureStore } from '@reduxjs/toolkit'
// import  userSlice  from './modules/user/userSlice'
import  balanceSlice  from './modules/balance/balanceSlice'
// ...

export const store = configureStore({
  reducer: {
    // user: userSlice,
    balance: balanceSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch