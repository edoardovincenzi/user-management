import React, { useEffect } from 'react';
import { getUsersAction } from '../../../store/table/thunkAction';
import Button from '../../Shared/Button';
import Form from '../../Shared/Form';
import DataGrid from './DataGrid/DataGrid';
import Toolbar from './Toolbar/Toolbar';
import useHome from './useHome';

const Home = () => {
  const {
    formik,
    handleClickRemoveOddRow,
    debouncedRefreshDataGrid,
    handleClickShowHidden,
    showGrid,
    dataStatus,
    data,
    dispatch,
  } = useHome();
  useEffect(() => {
    if (!data) {
      dispatch(getUsersAction());
    }
  }, []);

  return (
    <div className="flex flex-col w-full px-2">
      <Form formik={formik} />
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
      <DataGrid visible={showGrid} data={data} statusGetData={dataStatus} />
    </div>
  );
};

export default Home;
