import React from 'react';
import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  FilterSettingsModel,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import {
  Inject,
  Toolbar,
  ToolbarItems,
  Filter,
} from '@syncfusion/ej2-react-grids';
import { IUser } from '../../../Interfaces/api';
import Spinner from '../../../Shared/Spinner';

interface IProps {
  data: IUser | null;
}

const DataGrid = ({ data }: IProps) => {
  const toolbarOptions: ToolbarItems[] = ['ColumnChooser'];
  const filterOptions: FilterSettingsModel = {
    type: 'Menu',
  };
  if (!data) {
    return <Spinner />;
  }
  return (
    <GridComponent
      dataSource={data}
      toolbar={toolbarOptions}
      showColumnChooser={true}
      allowFiltering={true}
      filterSettings={filterOptions}
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
      <Inject services={[Toolbar, ColumnChooser, Filter]} />
    </GridComponent>
  );
};

export default DataGrid;
