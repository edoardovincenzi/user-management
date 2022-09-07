import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectUsersDataGridValue,
  selectStatusDataGridValue,
} from '../../../store/table/selectors';
import {
  getUsersAction,
  postUserAction,
} from '../../../store/table/thunkAction';
import { useDebouncedCallback } from 'use-debounce';
import {
  removeOddDataGrid,
  resetUserDetail,
} from '../../../store/table/tableSlice';
import { IPostUser, IUser } from '../../Interfaces/api';
import { FormikProps, useFormik } from 'formik';

const useHome = () => {
  const data = useAppSelector(selectUsersDataGridValue);
  const pending = useAppSelector(selectStatusDataGridValue) === 'loading';
  const dispatch = useAppDispatch();
  const [showGrid, setShowGrid] = useState<boolean>(true);
  useEffect(() => {
    dispatch(resetUserDetail());
  }, []);

  const initialValues = {
    id: -1,
    name: '',
    email: '',
    phone: '',
    address: { city: '', street: '' },
    submit: '',
  };

  const formik: FormikProps<IUser> = useFormik<IUser>({
    initialValues,
    onSubmit: (values, { resetForm, setFieldError }) => {
      const dataPost = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: { street: values.address.street, city: values.address.city },
      };
      dispatch(
        postUserAction({
          user: dataPost,
          resetForm: resetForm,
          setFieldError: setFieldError,
        })
      );
    },
  });
  const handleClickShowHidden = () => {
    setShowGrid((prev) => !prev);
  };

  const debouncedRefreshDataGrid = useDebouncedCallback(
    // function
    (value) => {
      dispatch(getUsersAction());
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
