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
  Edit,
} from '@syncfusion/ej2-react-grids';
import { IUser } from '../../../Interfaces/api';
import Spinner from '../../../Shared/Spinner';
import useDataGrid from './useDataGrid';
interface IProps {
  data: IUser[] | null;
  pending: boolean;
}

const DataGrid = ({ data, pending }: IProps) => {
  const {
    toolbarOptions,
    filterOptions,
    pageOptions,
    template,
    editOptions,
    actionComplete,
  } = useDataGrid();

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
      editSettings={editOptions}
      allowPaging={true}
      pageSettings={pageOptions}
      className="border-2 border-solid border-gray-700 rounded-md"
      allowTextWrap={true}
      actionComplete={actionComplete}
    >
      <ColumnsDirective>
        <ColumnDirective
          field="name"
          headerText="Name"
          width="150"
          textAlign="Right"
          validationRules={{ required: true }}
        />
        <ColumnDirective
          field="email"
          headerText="Email"
          width="150"
          textAlign="Right"
          validationRules={{
            required: true,
            // pattern: '^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$',
          }}
          allowFiltering={false}
        />
        <ColumnDirective
          field="phone"
          headerText="Phone"
          width="150"
          textAlign="Right"
          allowFiltering={false}
          validationRules={{ required: true }}
        />
        <ColumnDirective
          field="address.city"
          headerText="City"
          width="150"
          textAlign="Right"
          validationRules={{ required: true }}
        />
        <ColumnDirective
          field="address.street"
          headerText="Street"
          width="150"
          textAlign="Right"
          allowFiltering={false}
          validationRules={{ required: true }}
        />
        <ColumnDirective
          headerText="Details user"
          template={template}
          width="220"
          textAlign="Right"
          allowFiltering={false}
          allowEditing={false}
        />
      </ColumnsDirective>
      <Inject services={[Toolbar, Edit, ColumnChooser, Filter, Page]} />
    </GridComponent>
  );
};

export default DataGrid;
