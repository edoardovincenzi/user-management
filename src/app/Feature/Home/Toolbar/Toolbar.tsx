import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Toolbar = ({ children }: IProps) => {
  return (
    <div className="py-4 mb-4 gap-4 px-8 w-full flex rounded-md justify-end bg-gray-700 [&>*]:text-white">
      {children}
    </div>
  );
};

export default Toolbar;
