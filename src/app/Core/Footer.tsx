import React from 'react';

const Footer = () => {
  return (
    <div className="text-center bg-orange-200 w-screen mt-auto flex flex-col [& >*]:text-white">
      <p>Exercise by Edoardo Vincenzi</p>
      <div className="w-screen flex justify-center gap-4">
        <a
          target="_blank"
          href="https://edoardovincenzi.netlify.app/"
          rel="noreferrer"
        >
          <div className="flex_row_center">
            {/* <WebAssetIcon /> */}
            <p>Sito web</p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://github.com/edoardovincenzi"
          rel="noreferrer"
        >
          <div className="flex_row_center">
            {/* <GitHubIcon /> */}
            <p>GitHub</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
