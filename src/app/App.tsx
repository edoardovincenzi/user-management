import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectTableValue } from '../store/table/selectors';
import { getUserAction } from '../store/table/thunkAction';
import Spinner from './Shared/Spinner';
import DataGrid from './Feature/DataGrid';
import Footer from './Core/Footer';

function App() {
  const data = useAppSelector(selectTableValue);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  return (
    <div className="flex h-screen flex-col w-screen justify-center">
      <DataGrid data={data} />
      <Footer />
    </div>
  );
}

export default App;
