import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectTableValue } from '../../../store/table/selectors';
import { getUserAction } from '../../../store/table/thunkAction';
import Button from '../../Shared/Button';
import Form from '../../Shared/Form';
import DataGrid from './DataGrid/DataGrid';
import Toolbar from './Toolbar/Toolbar';

const Home = () => {
  const data = useAppSelector(selectTableValue);
  const dispatch = useAppDispatch();
  const [showGrid, setShowGrid] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const handleClick = () => {
    setShowGrid((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full px-2">
      <Form />
      <Button
        handleClick={handleClick}
        text={showGrid ? 'Hidden table' : 'Show table'}
      />
      <Toolbar />
      {showGrid ? <DataGrid data={data} /> : null}
    </div>
  );
};

export default Home;
