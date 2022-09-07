import React, { useEffect } from 'react';
import { FormikProps } from 'formik';
import Button from './Button';
import Input from './Input';

import { IUser } from '../Interfaces/api';
import { useAppSelector } from '../../store/hooks';
import { selectUserDetailataGrid } from '../../store/table/selectors';

interface IProps {
  formDisabled?: boolean;
  formik: FormikProps<IUser>;
}

const Form = ({ formDisabled = false, formik }: IProps) => {
  let getUserById;
  useEffect(() => {
    getUserById = useAppSelector(selectUserDetailataGrid);
  }, []);

  useEffect(() => {
    if (getUserById.user) {
      formik.setValues(getUserById.user);
    }
  }, [getUserById.user?.id]);

  // if (
  //   formDisabled &&
  //   getUserById.status === 'idle' &&
  //   getUserById.user &&
  //   formik.values.id === -1
  // ) {

  // }
  return (
    <form
      className="border-2 border-gray-700 rounded-md py-8 px-3 w-full h-full"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            type="text"
            required={true}
            disabled={formDisabled}
            placeholder="Insert name here"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            required={true}
            disabled={formDisabled}
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            placeholder="Insert email address here"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Input
            id="phone"
            name="phone"
            type="string"
            required={true}
            disabled={formDisabled}
            placeholder="Insert number phone (no prefix) here"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <Input
            id="city"
            name="address.city"
            type="text"
            required={true}
            disabled={formDisabled}
            placeholder="Insert city here"
            onChange={formik.handleChange}
            value={formik.values.address.city}
          />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <Input
            id="street"
            name="address.street"
            type="text"
            required={true}
            disabled={formDisabled}
            placeholder="Insert street address here"
            onChange={formik.handleChange}
            value={formik.values.address.street}
          />
        </div>
      </div>

      {!formDisabled ? (
        <Button
          className="mt-16 mb-4 flex mx-auto"
          type="submit"
          text="Submit"
        />
      ) : null}
    </form>
  );
};

export default Form;
