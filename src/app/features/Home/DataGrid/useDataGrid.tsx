import React, { useEffect, useState } from 'react';
import {
  FilterSettingsModel,
  PageSettingsModel,
} from '@syncfusion/ej2-react-grids';
import { ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Button } from 'app/shared';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../store/hooks';
import { IUser } from 'app/model/api';
import { updateRowById } from '../../../../store/userManagement/userManagementSlice';

const useDataGrid = () => {
  const dispatch = useAppDispatch();
  const [shouldCreate, setShouldCreate] = useState<number | null>(null);
  const navigate = useNavigate();
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

  useEffect(() => {
    return () => {
      if (shouldCreate) {
        navigate(`userDetails/${shouldCreate}`);
      }
    };
  }, [shouldCreate]);

  const handleRedirectUserDetails = (id: number) => {
    setShouldCreate(id);
  };

  //any beacuse in documentation give me this type
  const openDetailsUsers = (props: any): any => {
    return (
      <Button
        handleClick={() => handleRedirectUserDetails(props.id)}
        text="Open details user"
      />
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
    shouldCreate,
  };
};

export default useDataGrid;
