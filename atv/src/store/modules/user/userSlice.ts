import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  age: number;
}

const initialState: UserState = {
  name: '',
  age: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
    clearUser: (state) => {
      state.name = '';
      state.age = 0;
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
