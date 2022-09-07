import { useAppDispatch } from './../../../store/hooks';
import { FormikProps, useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { IUser } from '../../Interfaces/api';
import { getUserByIdAction } from '../../../store/table/thunkAction';

const useDetailUser = () => {
  const { id = -1 } = useParams();
  const dispath = useAppDispatch();
  dispath(getUserByIdAction(Number(id)));
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
  return { formik };
};

export default useDetailUser;
