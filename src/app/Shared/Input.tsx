import React from 'react';

interface IProps {
  type?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string | number;
  disabled?: boolean;
}

const Input = ({
  type,
  id,
  placeholder = '',
  required = false,
  disabled = false,
  pattern,
  name,
  onChange,
  value,
}: IProps) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      pattern={pattern}
      onChange={onChange}
      value={value}
      disabled={disabled}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
};

export default Input;
