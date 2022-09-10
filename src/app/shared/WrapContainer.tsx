import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const WrapContainer = ({ children }: IProps) => {
  return <div className="container mx-auto my-8">{children}</div>;
};

export default WrapContainer;
