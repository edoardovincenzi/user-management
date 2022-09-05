import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="py-4 text-center bg-indigo-500 w-screen flex flex-col [&>*]:text-white">
      <Link to={'/'}>
        <h1 className="text-3xl">User management</h1>
      </Link>
    </div>
  );
};

export default Navbar;
