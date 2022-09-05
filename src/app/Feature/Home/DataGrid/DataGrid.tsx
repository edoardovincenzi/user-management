import React from 'react';
import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import {
  Inject,
  Toolbar,
  Filter,
  Page,
} from '@syncfusion/ej2-react-grids';
import { IUser } from '../../../Interfaces/api';
import Spinner from '../../../Shared/Spinner';
import useDataGrid from './useDataGrid';
interface IProps {
  data: IUser[] | null;
  pending: boolean;
}

const DataGrid = ({ data, pending }: IProps) => {
  const { toolbarOptions, filterOptions, pageOptions, template } =
    useDataGrid();

  if (!data && !pending) {
    return <p>Communication error with the server</p>;
  }
  if (!data || pending) {
    return <Spinner />;
  }
  return (
    <GridComponent
      dataSource={data}
      toolbar={toolbarOptions}
      showColumnChooser={true}
      allowFiltering={true}
      filterSettings={filterOptions}
      allowPaging={true}
      pageSettings={pageOptions}
      className="border-2 border-solid border-gray-700 rounded-md"
      allowTextWrap={true}
    >
      <ColumnsDirective>
        <ColumnDirective
          field="name"
          headerText="Name"
          width="150"
          textAlign="Right"
        />
        <ColumnDirective
          field="email"
          headerText="Email"
          width="150"
          textAlign="Right"
          allowFiltering={false}
        />
        <ColumnDirective
          field="phone"
          headerText="Phone"
          width="150"
          textAlign="Right"
          allowFiltering={false}
        />
        <ColumnDirective
          field="address.city"
          headerText="City"
          width="150"
          textAlign="Right"
        />
        <ColumnDirective
          field="address.street"
          headerText="Street"
          width="150"
          textAlign="Right"
          allowFiltering={false}
        />
        <ColumnDirective
          headerText="Details user"
          template={template}
          width="220"
          textAlign="Right"
          allowFiltering={false}
        />
      </ColumnsDirective>
      <Inject services={[Toolbar, ColumnChooser, Filter, Page]} />
    </GridComponent>
  );
};

export default DataGrid;
