import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectTableValue } from '../../../store/table/selectors';
import { getUserAction } from '../../../store/table/thunkAction';
import DataGrid from './DataGrid/DataGrid';

const Home = () => {
  const data = useAppSelector(selectTableValue);
  const dispatch = useAppDispatch();
  const [showGrid, setShowGrid] = useState<boolean>(true);
  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const handleClick = () => {
    setShowGrid((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="flex mx-auto mt-16 mb-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {showGrid ? 'Hidden table' : 'Show table'}
      </button>
      {showGrid ? <DataGrid data={data} /> : null}
    </div>
  );
};

export default Home;
