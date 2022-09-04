import React from 'react';

interface IProps {
  text: string;
  handleClick?: (props: any) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: object;
}

const Button = ({
  text,
  handleClick,
  type = 'button',
  className = '',
  style = {},
}: IProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${className} flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
      type={type}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
