import React from 'react';
import { useFormik } from 'formik';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      city: '',
      street: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
            type="number"
            required={true}
            placeholder="Insert number phone (no prefix) here"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <Input
            id="city"
            name="city"
            type="text"
            required={true}
            placeholder="Insert city here"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <Input
            id="street"
            name="street"
            type="text"
            required={true}
            placeholder="Insert street address here"
            onChange={formik.handleChange}
            value={formik.values.street}
          />
        </div>
      </div>

      <Button type="submit" text="Submit" />
    </form>
  );
};

export default Form;
