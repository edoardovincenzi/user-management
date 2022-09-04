import { IUser } from './api';

export interface IUsersState {
  usersDataGrid: IUsersDataGrid;
}
export type IUsersDataGrid = {
  dataGrid: IUser[] | null;
  status: 'idle' | 'loading' | 'failed';
};
