import { IUser } from './../../app/Interfaces/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, postUser } from '../../app/apiCall';

export const getUserAction = createAsyncThunk(
  'table/fetchDataTable',
  async () => {
    return await getUser();
  }
);

export const postUserAction = createAsyncThunk(
  'table/postUser',
  async (user: IUser) => {
    return await postUser(user);
  }
);
