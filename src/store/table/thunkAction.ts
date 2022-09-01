import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../../app/apiCall';

export const getUserAction = createAsyncThunk(
  'table/fetchDataTable',
  async () => {
    return await getUser();
  }
);
