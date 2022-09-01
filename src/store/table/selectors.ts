import { RootState } from '../store';

export const selectTableValue = (state: RootState) => state.table.value;
