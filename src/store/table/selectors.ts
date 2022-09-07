import { IUser } from './../../app/Interfaces/api';
import { RootState } from '../store';
import { IUserDetail } from '../../app/Interfaces/store';

export const selectUsersDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.dataGrid;

export const selectStatusDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.status;

export const selectUserDetailataGrid = (state: RootState): IUserDetail => {
  return state.table.userDetail;
};
