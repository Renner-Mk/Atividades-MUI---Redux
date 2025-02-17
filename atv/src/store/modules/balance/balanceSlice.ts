import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Balance {
  amount: number;
}

interface BalanceState {
  amounts: Balance[];
}

const initialState: BalanceState = {
  amounts: []
};

const balanceSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Balance>) => {
      state.amounts.push(action.payload);
    },
    // removePost: (state, action: PayloadAction<number>) => {
    //   state.amounts = state.amounts.filter(amount => amount !== action.payload);
    // }
  }
});

export const { addPost } = balanceSlice.actions;
export default balanceSlice.reducer;
