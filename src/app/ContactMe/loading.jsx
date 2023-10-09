// components/Loader.js
"use client";
import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <Image
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          width={500}
          height={500}
          className="rounded-full h-28 w-28"
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default Loader;
