import React from 'react';
import {
  FilterSettingsModel,
  PageSettingsModel,
} from '@syncfusion/ej2-react-grids';
import { ToolbarItems } from '@syncfusion/ej2-react-grids';
import Button from '../../../Shared/Button';
import { useNavigate } from 'react-router-dom';

const useDataGrid = () => {
  const navigate = useNavigate();
  const toolbarOptions: ToolbarItems[] = ['ColumnChooser'];
  const filterOptions: FilterSettingsModel = {
    type: 'Menu',
  };
  const pageOptions: PageSettingsModel = {
    pageSize: 5,
    pageSizes: true,
  };

  const template = (props: any): any => {
    return (
      <Button
        text="Open details user"
        handleClick={() => navigate(`userDetails/${props.id}`)}
      />
    );
  };
  return { toolbarOptions, filterOptions, pageOptions, template };
};

export default useDataGrid;
