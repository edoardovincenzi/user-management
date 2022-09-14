import { IUser } from 'app/model/api';
import { IStatus } from 'app/model/store';
import { RootState } from '../store';

export const selectUsersDataGridValue = (state: RootState) =>
  state.userManagement.usersDataGrid.dataGrid;

export const selectStatusDataGridValue = (state: RootState) =>
  state.userManagement.usersDataGrid.status;

export const selectValueUserDetail = (state: RootState): IUser =>
  state.userManagement.userDetail.user;

export const selectStatusUserDetail = (state: RootState): IStatus =>
  state.userManagement.userDetail.status;
