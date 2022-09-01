import { GridComponent } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { IUser } from '../Interfaces/api';
import Spinner from '../Shared/Spinner';

interface IProps {
  data: IUser | null;
}

const DataGrid = ({ data }: IProps) => {
  return <>{data ? <GridComponent dataSource={data} /> : <Spinner />}</>;
};

export default DataGrid;
