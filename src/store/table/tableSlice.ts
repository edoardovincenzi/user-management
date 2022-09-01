import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../../app/Interfaces/store';
import { getUserAction } from './thunkAction';

const initialState: CounterState = {
  value: null,
  status: 'idle',
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserAction.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload) {
          state.value = action.payload;
        }
      })
      .addCase(getUserAction.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {} = tableSlice.actions;

export default tableSlice.reducer;
