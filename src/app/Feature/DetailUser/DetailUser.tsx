import { Link } from 'react-router-dom';
import Button from '../../Shared/Button';
import Form from '../../Shared/Form';
import useDetailUser from './useDetailUser';

const DetailUser = () => {
  const { formik } = useDetailUser();
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Form formDisabled={true} formik={formik} />{' '}
      <Link to={'/'}>
        <Button text="Back to home" />
      </Link>
    </div>
  );
};

export default DetailUser;
