import React from 'react';
import {
  DialogEditEventArgs,
  FilterSettingsModel,
  PageSettingsModel,
} from '@syncfusion/ej2-react-grids';
import { ToolbarItems } from '@syncfusion/ej2-react-grids';
import Button from '../../../Shared/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../store/hooks';
import { IUser } from '../../../Interfaces/api';
import { updateRowById } from '../../../../store/table/tableSlice';

const useDataGrid = () => {
  const navigate = useNavigate();
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

  const template = (props: any): any => {
    return (
      <Button
        text="Open details user"
        handleClick={() => navigate(`userDetails/${props.id}`)}
      />
    );
  };

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
    template,
    editOptions,
    actionComplete,
  };
};

export default useDataGrid;
