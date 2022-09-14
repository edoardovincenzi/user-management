import { Link } from 'react-router-dom';
import { Button } from 'app/shared';
import useDetailUser from './useDetailUser';
import FormDetailUser from './FormDetailUser/FormDetailUser';

const DetailUser = () => {
  const { formik, getValueUserById, getStatusUserById } = useDetailUser();
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <FormDetailUser
        status={getStatusUserById}
        data={getValueUserById}
        formik={formik}
      />
      <Link to={'/'}>
        <Button text="Back to home" />
      </Link>
    </div>
  );
};

export default DetailUser;
