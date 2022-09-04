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
