"use client";
import React from 'react';

const Videotiger = () => {
  return (
    <div className='flex mt-16 mb-0 justify-center space-x-8'>
      <div className='w-72 h-36 mt-4'>
        <video autoPlay muted loop className="rounded-lg w-full h-full">
          <source src="/assests/intro.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='w-72 h-36 mt-4'>
        <video autoPlay muted loop className="rounded-lg w-full h-full">
          <source src="/assests/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='w-72 h-36 mt-4'>
        <video autoPlay muted loop className="rounded-lg w-full h-full">
          <source src="/assests/Video2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Videotiger;
