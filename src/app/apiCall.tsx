import axios from 'axios';
import { IUser } from './Interfaces/api';

export async function getUser(): Promise<IUser[] | undefined> {
  try {
    return await (
      await axios.get('https://jsonplaceholder.typicode.com/users')
    ).data;
  } catch (error) {
    console.error(error);
  }
}

export async function postUser(userPost: IUser): Promise<IUser | undefined> {
  try {
    const dataReturn = await (
      await axios.post('https://jsonplaceholder.typicode.com/users', {
        userPost,
      })
    ).data;
    return { id: dataReturn.id, ...dataReturn.userPost };
  } catch (error) {
    console.error(error);
  }
}
