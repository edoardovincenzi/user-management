import { IUser } from 'app/model/api';
import { IStatus } from 'app/model/store';
import { RootState } from '../store';

export const selectUsersDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.dataGrid;

export const selectStatusDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.status;

export const selectValueUserDetail = (state: RootState): IUser =>
  state.table.userDetail.user;

export const selectStatusUserDetail = (state: RootState): IStatus =>
  state.table.userDetail.status;
