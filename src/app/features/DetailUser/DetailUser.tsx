import { Button } from 'app/shared';
import useDetailUser from './useDetailUser';
import FormDetailUser from './FormDetailUser/FormDetailUser';

const DetailUser = () => {
  const { formik, getValueUserById, getStatusUserById, resetUserDetails } =
    useDetailUser();
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <FormDetailUser
        status={getStatusUserById}
        data={getValueUserById}
        formik={formik}
      />
      <Button handleClick={resetUserDetails} text="Back to home" />
    </div>
  );
};

export default DetailUser;
