import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectUsersDataGridValue,
  selectStatusDataGridValue,
} from '../../../store/table/selectors';
import {
  getUserAction,
  postUserAction,
} from '../../../store/table/thunkAction';
import { useDebouncedCallback } from 'use-debounce';
import Button from '../../Shared/Button';
import Form from '../../Shared/Form';
import DataGrid from './DataGrid/DataGrid';
import Toolbar from './Toolbar/Toolbar';
import { removeOddDataGrid } from '../../../store/table/tableSlice';
import { IUser } from '../../Interfaces/api';

const Home = () => {
  const data = useAppSelector(selectUsersDataGridValue);
  const pending = useAppSelector(selectStatusDataGridValue) === 'loading';
  const dispatch = useAppDispatch();
  const [showGrid, setShowGrid] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const handleClickShowHidden = () => {
    setShowGrid((prev) => !prev);
  };

  const handleSubmit = (values: IUser) => {
    dispatch(postUserAction(values));
  };
  const debouncedRefreshDataGrid = useDebouncedCallback(
    // function
    (value) => {
      dispatch(getUserAction());
    },
    // delay in ms
    250
  );

  const handleClickRemoveOddRow = () => {
    dispatch(removeOddDataGrid());
  };

  return (
    <div className="flex flex-col w-full px-2">
      <Form handleSubmit={handleSubmit} />
      <Button
        handleClick={handleClickShowHidden}
        text={showGrid ? 'Hidden table' : 'Show table'}
        className="mt-16 mb-4 mx-auto"
      />
      <Toolbar>
        <Button text="Remove odd row" handleClick={handleClickRemoveOddRow} />
        <Button
          text="Refresh data grid"
          handleClick={debouncedRefreshDataGrid}
        />
      </Toolbar>
      {showGrid ? <DataGrid data={data} pending={pending} /> : null}
    </div>
  );
};

export default Home;
