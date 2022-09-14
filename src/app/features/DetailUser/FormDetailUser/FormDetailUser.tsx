import { IUser } from 'app/model/api';
import { IStatus } from 'app/model/store';
import { Form, Spinner } from 'app/shared';
import { FormikProps } from 'formik';
import React from 'react';

interface Props {
  data: IUser;
  status: IStatus;
  formik: FormikProps<IUser>;
}

const FormDetailUser = ({ data, status, formik }: Props) => {
  if (status === 'failed') {
    return <p className="text-center text-red-600">Error for getting data</p>;
  }
  if (status === 'loading') {
    <Spinner />;
  }

  return (
    <>
      {data.id !== -1 && status === 'idle' ? (
        <Form formDisabled formik={formik} />
      ) : null}
    </>
  );
};

export default FormDetailUser;
