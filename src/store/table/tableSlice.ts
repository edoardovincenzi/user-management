import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsersState } from '../../app/Interfaces/store';
import { getUserAction, postUserAction } from './thunkAction';
import { IUser } from '../../app/Interfaces/api';

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
      const evenUsersDataGrid = state.usersDataGrid.dataGrid
        ? state.usersDataGrid.dataGrid.filter((item, index) => index % 2 === 0)
        : null;
      return {
        ...state,
        usersDataGrid: { ...state.usersDataGrid, dataGrid: evenUsersDataGrid },
      };
    },
    updateRowById(
      state: IUsersState,
      action: PayloadAction<IUser>
    ): IUsersState {
      const stateWithoutRowSelected = state.usersDataGrid.dataGrid
        ? state.usersDataGrid.dataGrid.filter(
            (item) => action.payload.id !== item.id
          )
        : null;
      if (stateWithoutRowSelected) {
        return {
          ...state,
          usersDataGrid: {
            ...state.usersDataGrid,
            dataGrid: [action.payload, ...stateWithoutRowSelected],
          },
        };
      }
      return state;
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
      })
      .addCase(postUserAction.pending, (state) => {
        state.usersDataGrid.status = 'loading';
      })
      .addCase(postUserAction.fulfilled, (state, action) => {
        state.usersDataGrid.status = 'idle';
        if (action.payload) {
          state.usersDataGrid.dataGrid = state.usersDataGrid.dataGrid && [
            action.payload,
            ...state.usersDataGrid?.dataGrid,
          ];
        }
      })
      .addCase(postUserAction.rejected, (state) => {
        state.usersDataGrid.status = 'failed';
      });
  },
});

export const { resetDataGrid, removeOddDataGrid, updateRowById } =
  tableSlice.actions;

export default tableSlice.reducer;
