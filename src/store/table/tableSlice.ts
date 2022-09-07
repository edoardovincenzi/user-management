import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsersState } from '../../app/Interfaces/store';
import {
  getUsersAction,
  postUserAction,
  getUserByIdAction,
} from './thunkAction';
import { IUser } from '../../app/Interfaces/api';

export const initialStateUser = {
  id: -1,
  name: '',
  email: '',
  phone: '',
  address: { city: '', street: '' },
};

const initialState: IUsersState = {
  usersDataGrid: { dataGrid: null, status: 'idle' },
  userDetail: {
    user: initialStateUser,
    status: 'idle',
  },
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
    resetUserDetail(state: IUsersState): IUsersState {
      return {
        ...state,
        userDetail: { user: initialStateUser, status: 'idle' },
        usersDataGrid: state.usersDataGrid,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAction.pending, (state) => {
        state.usersDataGrid.status = 'loading';
      })
      .addCase(getUsersAction.fulfilled, (state, action) => {
        state.usersDataGrid.status = 'idle';
        if (action.payload) {
          state.usersDataGrid.dataGrid = action.payload;
        }
      })
      .addCase(getUsersAction.rejected, (state) => {
        state.usersDataGrid.status = 'failed';
      })
      // .addCase(postUserAction.pending, (state) => {
      //   state.usersDataGrid.status = 'loading';
      // })
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
      })
      .addCase(getUserByIdAction.pending, (state) => {
        state.userDetail.status = 'loading';
      })
      .addCase(getUserByIdAction.fulfilled, (state, action) => {
        state.userDetail.status = 'idle';
        if (action.payload) {
          state.userDetail.user = action.payload;
        }
      })
      .addCase(getUserByIdAction.rejected, (state) => {
        state.userDetail.status = 'failed';
      });
  },
});

export const {
  resetDataGrid,
  removeOddDataGrid,
  updateRowById,
  resetUserDetail,
} = tableSlice.actions;

export default tableSlice.reducer;
