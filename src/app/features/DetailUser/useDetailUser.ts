import { useAppDispatch, useAppSelector } from 'store/hooks';
import { FormikProps, useFormik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from 'app/model/api';
import { getUserByIdAction } from 'store/userManagement/thunkAction';
import {
  selectValueUserDetail,
  selectStatusUserDetail,
} from 'store/userManagement/selectors';
import { useEffect } from 'react';
import { resetUserDetail } from 'store/userManagement/userManagementSlice';

const useDetailUser = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserByIdAction(Number(id)));
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
  const resetUserDetails = () => {
    dispatch(resetUserDetail());
    navigate('/');
  };

  useEffect(() => {
    if (getValueUserById) {
      formik.setValues(getValueUserById);
    }
  }, [getValueUserById]);

  return { formik, getValueUserById, getStatusUserById, resetUserDetails };
};

export default useDetailUser;
