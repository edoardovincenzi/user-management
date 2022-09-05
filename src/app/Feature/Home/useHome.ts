import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectUsersDataGridValue,
  selectStatusDataGridValue,
} from '../../../store/table/selectors';
import {
  getUserAction,
  postUserAction,
} from '../../../store/table/thunkAction';
import { useDebouncedCallback } from 'use-debounce';
import Button from '../../Shared/Button';
import Form from '../../Shared/Form';
import DataGrid from './DataGrid/DataGrid';
import Toolbar from './Toolbar/Toolbar';
import { removeOddDataGrid } from '../../../store/table/tableSlice';
import { IUser } from '../../Interfaces/api';
import { FormikProps, useFormik } from 'formik';

const useHome = () => {
  const data = useAppSelector(selectUsersDataGridValue);
  const pending = useAppSelector(selectStatusDataGridValue) === 'loading';
  const dispatch = useAppDispatch();
  const [showGrid, setShowGrid] = useState<boolean>(false);

  const handleSubmit = (values: IUser) => {
    dispatch(postUserAction(values));
  };

  const formik: FormikProps<IUser> = useFormik<IUser>({
    initialValues: {
      id: -1,
      name: '',
      email: '',
      phone: '',
      address: { city: '', street: '' },
    },
    onSubmit: (values) => {
      const dataPost = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: { street: values.address.street, city: values.address.city },
      };
      handleSubmit && handleSubmit(dataPost);
    },
  });
  const handleClickShowHidden = () => {
    setShowGrid((prev) => !prev);
  };

  const debouncedRefreshDataGrid = useDebouncedCallback(
    // function
    (value) => {
      dispatch(getUserAction());
    },
    // delay in ms
    250
  );

  const handleClickRemoveOddRow = () => {
    dispatch(removeOddDataGrid());
  };
  return {
    formik,
    handleClickRemoveOddRow,
    debouncedRefreshDataGrid,
    handleClickShowHidden,
    showGrid,
    pending,
    data,
    dispatch,
  };
};

export default useHome;
