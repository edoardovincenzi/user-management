import React from 'react';
import {
  FilterSettingsModel,
  PageSettingsModel,
} from '@syncfusion/ej2-react-grids';
import { ToolbarItems } from '@syncfusion/ej2-react-grids';
import Button from '../../../Shared/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../store/hooks';
import { IUser } from '../../../Interfaces/api';
import { updateRowById } from '../../../../store/table/tableSlice';

const useDataGrid = () => {
  const dispatch = useAppDispatch();
  const toolbarOptions: ToolbarItems[] = [
    'ColumnChooser',
    'Edit',
    'Update',
    'Cancel',
  ];
  const filterOptions: FilterSettingsModel = {
    type: 'Menu',
  };
  const pageOptions: PageSettingsModel = {
    pageSize: 5,
    pageSizes: true,
  };
  const editOptions = {
    allowAdding: false,
    allowDeleting: false,
    allowEditing: true,
    showDeleteConfirmDialog: true,
  };
  //any beacuse in documentation give me this type
  const openDetailsUsers = (props: any): any => {
    return (
      <Link to={`userDetails/${props.id}`}>
        <Button text="Open details user" />
      </Link>
    );
  };
  //any beacuse in documentation give me this type
  const actionComplete = (args: any) => {
    if (args.requestType === 'save') {
      if (args.data) {
        dispatch(updateRowById(args.data as IUser));
      }
    }
  };
  return {
    toolbarOptions,
    filterOptions,
    pageOptions,
    openDetailsUsers,
    editOptions,
    actionComplete,
  };
};

export default useDataGrid;
