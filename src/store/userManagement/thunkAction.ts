import { IPostUser, IUser } from 'app/model/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, postUser, getUserById } from 'app/api/apiCall';
import { IUserManagement } from 'app/model/store';
import { FormikState } from 'formik';

export const getUsersAction = createAsyncThunk(
  'userManagement/getUsersAction',
  async (state, thunkAPI) => {
    return await getUsers(thunkAPI.rejectWithValue);
  }
);

export const postUserAction = createAsyncThunk(
  'userManagement/postUserAction',
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
  'userManagement/getUserByIdAction',
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as IUserManagement;
    const getUserFromDataGrid = state?.userManagement?.usersDataGrid?.dataGrid
      ? state.userManagement.usersDataGrid.dataGrid.filter(
          (item) => item.id === id
        )[0]
      : null;
    return getUserFromDataGrid
      ? getUserFromDataGrid
      : await getUserById(id, thunkAPI.rejectWithValue);
  }
);
