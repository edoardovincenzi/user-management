import { IUser } from './../../app/Interfaces/api';
import { RootState } from '../store';

export const selectUsersDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.dataGrid;

export const selectStatusDataGridValue = (state: RootState) =>
  state.table.usersDataGrid.status;

export const selectUserByIdDataGrid =
  (id: number) =>
  (state: RootState): IUser[] => {
    if (state.table.usersDataGrid.dataGrid) {
      return (
        state.table.usersDataGrid.dataGrid.filter((item) => item.id === id) ?? [
          {
            id: -1,
            name: '',
            email: '',
            phone: '',
            address: { city: '', street: '' },
          },
        ]
      );
    }
    return [
      {
        id: -1,
        name: '',
        email: '',
        phone: '',
        address: { city: '', street: '' },
      },
    ];
  };
