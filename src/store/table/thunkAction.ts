import { IPostUser, IUser } from './../../app/Interfaces/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, postUser, getUserById } from '../../app/apiCall';
import { ITable } from '../../app/Interfaces/store';
import { FormikState } from 'formik';

export const getUsersAction = createAsyncThunk(
  'table/getUsersAction',
  async (state, thunkAPI) => {
    return await getUsers(thunkAPI.rejectWithValue);
  }
);

export const postUserAction = createAsyncThunk(
  'table/postUserAction',
  async (
    {
      user,
      resetForm,
      setFieldError,
    }: {
      user: IPostUser;
      resetForm: (nextState?: Partial<FormikState<IUser>> | undefined) => void;
      setFieldError: (field: string, message: string | undefined) => void;
    },
    thunkAPI
  ) => {
    return await postUser(
      user,
      resetForm,
      setFieldError,
      thunkAPI.rejectWithValue
    );
  }
);

export const getUserByIdAction = createAsyncThunk(
  'table/getUserByIdAction',
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as ITable;
    if (state?.table?.usersDataGrid?.dataGrid) {
      return state.table.usersDataGrid.dataGrid.filter(
        (item) => item.id === id
      )[0];
    }
    return await getUserById(id, thunkAPI.rejectWithValue);
  }
);
