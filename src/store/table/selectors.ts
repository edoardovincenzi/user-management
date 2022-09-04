import { RootState } from '../store';

export const selectUsersDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.dataGrid;

export const selectStatusDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.status;
