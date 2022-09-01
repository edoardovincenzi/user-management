import { IUser } from './api';

export interface CounterState {
  value: IUser | null;
  status: 'idle' | 'loading' | 'failed';
}
