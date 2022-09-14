import { useAppDispatch, useAppSelector } from 'store/hooks';
import { FormikProps, useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { IUser } from 'app/model/api';
import { getUserByIdAction } from 'store/table/thunkAction';
import {
  selectValueUserDetail,
  selectStatusUserDetail,
} from 'store/table/selectors';
import { useEffect } from 'react';

const useDetailUser = () => {
  const { id } = useParams();
  const dispath = useAppDispatch();
  useEffect(() => {
    dispath(getUserByIdAction(Number(id)));
  }, []);
  const getValueUserById = useAppSelector(selectValueUserDetail);
  const getStatusUserById = useAppSelector(selectStatusUserDetail);
  const formik: FormikProps<IUser> = useFormik<IUser>({
    initialValues: {
      id: -1,
      name: '',
      email: '',
      phone: '',
      address: { city: '', street: '' },
    },
    onSubmit: (values) => {},
  });

  useEffect(() => {
    if (getValueUserById) {
      formik.setValues(getValueUserById);
    }
  }, [getValueUserById]);

  return { formik, getValueUserById, getStatusUserById };
};

export default useDetailUser;
