import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-2 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
        <span className="text-center text-sm text-gray-500 dark:text-gray-400 w-full">
          Designed © 2024 <a href="https://beacons.ai/webcats" className="hover:underline">WebCats</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
