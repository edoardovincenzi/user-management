import React from 'react';

interface IProps {
  text: string;
  handleClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ text, handleClick, type = 'button' }: IProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex mx-auto mt-16 mb-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
