import { IUser } from './api';

export interface ITable {
  table: IUsersState;
}
export interface IUsersState {
  usersDataGrid: IUsersDataGrid;
  userDetail: IUserDetail;
}

export type IUserDetail = {
  user: IUser;
  status: IStatus;
};

export type IUsersDataGrid = {
  dataGrid: IUser[] | null;
  status: IStatus;
};

export type IStatus = 'idle' | 'loading' | 'failed';
