import React from 'react';
import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  FilterSettingsModel,
  GridComponent,
  PageSettingsModel,
} from '@syncfusion/ej2-react-grids';
import {
  Inject,
  Toolbar,
  ToolbarItems,
  Filter,
  Page,
} from '@syncfusion/ej2-react-grids';
import { IUser } from '../../../Interfaces/api';
import Spinner from '../../../Shared/Spinner';

interface IProps {
  data: IUser[] | null;
  pending: boolean;
}

const DataGrid = ({ data, pending }: IProps) => {
  const toolbarOptions: ToolbarItems[] = ['ColumnChooser'];
  const filterOptions: FilterSettingsModel = {
    type: 'Menu',
  };
  const pageOptions: PageSettingsModel = {
    pageSize: 5,
    pageSizes: true,
  };
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
    >
      <ColumnsDirective>
        <ColumnDirective
          field="name"
          headerText="Name"
          width="100"
          textAlign="Right"
        />
        <ColumnDirective
          field="email"
          headerText="Email"
          width="100"
          textAlign="Right"
          allowFiltering={false}
        />
        <ColumnDirective
          field="phone"
          headerText="Phone"
          width="100"
          textAlign="Right"
          allowFiltering={false}
        />
        <ColumnDirective
          field="address.city"
          headerText="City"
          width="100"
          textAlign="Right"
        />
        <ColumnDirective
          field="address.street"
          headerText="Street"
          width="100"
          textAlign="Right"
          allowFiltering={false}
        />
      </ColumnsDirective>
      <Inject services={[Toolbar, ColumnChooser, Filter, Page]} />
    </GridComponent>
  );
};

export default DataGrid;
