import { createSlice } from '@reduxjs/toolkit';
import { IUsersState } from '../../app/Interfaces/store';
import { getUserAction } from './thunkAction';

const initialState: IUsersState = {
  usersDataGrid: { dataGrid: null, status: 'idle' },
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    resetDataGrid(state: IUsersState): IUsersState {
      return {
        ...state,
        usersDataGrid: { ...state.usersDataGrid, dataGrid: null },
      };
    },
    removeOddDataGrid(state: IUsersState): IUsersState {
      const evenUsersDataGrid =
        state.usersDataGrid.dataGrid &&
        state.usersDataGrid.dataGrid.filter((item, index) => index % 2 === 0);
      return {
        ...state,
        usersDataGrid: { ...state.usersDataGrid, dataGrid: evenUsersDataGrid },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAction.pending, (state) => {
        state.usersDataGrid.status = 'loading';
      })
      .addCase(getUserAction.fulfilled, (state, action) => {
        state.usersDataGrid.status = 'idle';
        if (action.payload) {
          state.usersDataGrid.dataGrid = action.payload;
        }
      })
      .addCase(getUserAction.rejected, (state) => {
        state.usersDataGrid.status = 'failed';
      });
  },
});

export const { resetDataGrid, removeOddDataGrid } = tableSlice.actions;

export default tableSlice.reducer;
