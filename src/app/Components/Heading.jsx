"use client";
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const Heading = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-purple-600 py-10 px-4 rounded-md shadow-md mt-3 opacity-90 flex items-center justify-center">
      <div className="w-48 h-48 mr-8"> 
        <Image src="/profile-pic.png" width={200} height={200} alt="profile-image" />
      </div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hello, I am{' '}
          <span className="text-yellow-400">
            <Typewriter
              words={['Akash Sabe', 'a Coder', 'a "Programmer"', 'an "Engineer"', 'a "Full Stack Web Developer"']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-lg">Passionate about coding and web development.</p>
      </div>
    </div>
  );
};

export default Heading;
