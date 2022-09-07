import { IUser } from './../../app/Interfaces/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, postUser, getUserById } from '../../app/apiCall';

export const getUsersAction = createAsyncThunk(
  'table/getUsersAction',
  async () => {
    return await getUsers();
  }
);

export const postUserAction = createAsyncThunk(
  'table/postUserAction',
  async (user: IUser) => {
    return await postUser(user);
  }
);
export const getUserByIdAction = createAsyncThunk(
  'table/getUserByIdAction',
  async (id: number) => {
    return await getUserById(id);
  }
);
