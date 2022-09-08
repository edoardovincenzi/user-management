import axios from 'axios';
import { FormikState } from 'formik';
import { IPostUser, IUser } from './Interfaces/api';

export async function getUsers(
  rejectWithValue: any
): Promise<IUser[] | undefined> {
  try {
    return await (
      await axios.get('https://jsonplaceholder.typicode.com/userss')
    ).data;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error.response.data);
  }
}

export async function getUserById(
  id: number,
  rejectWithValue: any
): Promise<IUser | undefined> {
  try {
    return await (
      await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    ).data;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error.response.data);
  }
}

export async function postUser(
  userPost: IPostUser,
  resetForm: (nextState?: Partial<FormikState<IUser>> | undefined) => void,
  setFieldError: (field: string, message: string | undefined) => void,
  rejectWithValue: any
): Promise<IUser | undefined> {
  try {
    const dataReturn = await (
      await axios.post('https://jsonplaceholder.typicode.com/users', {
        userPost,
      })
    ).data;
    resetForm();
    return { id: dataReturn.id, ...dataReturn.userPost };
  } catch (error: any) {
    setFieldError('submit', 'Error API call');
    console.error(error);
    return rejectWithValue(error.response.data);
  }
}
