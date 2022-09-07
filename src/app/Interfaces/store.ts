import { IUser } from './api';

export interface IUsersState {
  usersDataGrid: IUsersDataGrid;
  userDetail: IUserDetail;
}

export type IUserDetail = {
  user: IUser | null;
  status: IStatus;
};

export type IUsersDataGrid = {
  dataGrid: IUser[] | null;
  status: IStatus;
};

export type IStatus = 'idle' | 'loading' | 'failed';
