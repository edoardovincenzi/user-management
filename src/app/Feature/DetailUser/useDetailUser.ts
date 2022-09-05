import { FormikProps, useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { selectUserByIdDataGrid } from '../../../store/table/selectors';
import { IUser } from '../../Interfaces/api';

const useDetailUser = () => {
  const { id = -1 } = useParams();
  const getUserById = useAppSelector(selectUserByIdDataGrid(Number(id)));
  const formik: FormikProps<IUser> = useFormik<IUser>({
    initialValues: getUserById[0],
    onSubmit: (values) => {},
  });
  return { formik };
};

export default useDetailUser;
