import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaKey, FaFire, FaDatabase as FaMongoDb, FaDatabase as FaSql, FaCloud, FaCss3Alt, FaCommentAlt } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="bg-purple-400 opacity-90 p-4 rounded-md shadow-md mx-4 my-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaHtml5 className="text-orange-500 text-4xl mr-2" />
          <p className="text-gray-700">HTML5</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaCss3 className="text-blue-500 text-4xl mr-2" />
          <p className="text-gray-700">CSS3</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaJs className="text-yellow-500 text-4xl mr-2" />
          <p className="text-gray-700">JavaScript</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaReact className="text-blue-300 text-4xl mr-2" />
          <p className="text-gray-700">React</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaNodeJs className="text-green-500 text-4xl mr-2" />
          <p className="text-gray-700">Node.js</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaMongoDb className="text-indigo-500 text-4xl mr-2" />
          <p className="text-gray-700">MongoDB</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaSql className="text-purple-500 text-4xl mr-2" />
          <p className="text-gray-700">SQL</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaServer className="text-gray-500 text-4xl mr-2" />
          <p className="text-gray-700">Express</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaCloud className="text-blue-500 text-4xl mr-2" />
          <p className="text-gray-700">Firebase</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaServer className="text-yellow-500 text-4xl mr-2" />
          <p className="text-gray-700">Next.js</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaKey className="text-indigo-500 text-4xl mr-2" />
          <p className="text-gray-700">TypeScript</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaFire className="text-red-500 text-4xl mr-2" />
          <p className="text-gray-700">Firebase</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaCss3Alt className="text-pink-500 text-4xl mr-2" />
          <p className="text-gray-700">Sass</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaCode className="text-gray-500 text-4xl mr-2" />
          <p className="text-gray-700">Other Skills</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <FaCommentAlt className="text-blue-500 text-4xl mr-2" />
          <p className="text-gray-700">Communication Skills</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
