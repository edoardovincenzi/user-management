import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Footer = () => {
  return (
    <div className="py-4 text-center bg-indigo-500 w-screen mt-auto flex flex-col [&>*]:text-white">
      <p>Exercise by Edoardo Vincenzi</p>
      <div className="w-screen flex justify-center gap-4">
        <a
          target="_blank"
          href="https://www.edoardovincenzi.it/en"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center gap-3 hover:underline">
            <CgWebsite />
            <p>Web site</p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://github.com/edoardovincenzi"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center gap-3 hover:underline">
            <BsGithub />
            <p>GitHub</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
