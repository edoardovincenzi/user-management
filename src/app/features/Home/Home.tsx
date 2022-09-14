import React from 'react';
import { Button, Form } from 'app/shared';
import DataGrid from './DataGrid/DataGrid';
import Toolbar from './Toolbar/Toolbar';
import useHome from './useHome';
import { Link } from 'react-router-dom';

const Home = () => {
  const {
    formik,
    handleClickRemoveOddRow,
    debouncedRefreshDataGrid,
    handleClickShowHidden,
    showGrid,
    dataStatus,
    data,
  } = useHome();

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
