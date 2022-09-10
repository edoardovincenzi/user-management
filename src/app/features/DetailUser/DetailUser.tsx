import { Link } from 'react-router-dom';
import Button from 'app/shared/Button';
import Form from 'app/shared/Form';
import useDetailUser from './useDetailUser';

const DetailUser = () => {
  const { formik, getValueUserById, getStatusUserById } = useDetailUser();
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Form
        formDisabled={true}
        formData={{ status: getStatusUserById, user: getValueUserById }}
        formik={formik}
      />{' '}
      <Link to={'/'}>
        <Button text="Back to home" />
      </Link>
    </div>
  );
};

export default DetailUser;
