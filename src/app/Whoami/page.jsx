"use client";
import React, { useState } from 'react';
import { FaUser, FaBirthdayCake, FaGraduationCap, FaSchool, FaBook, FaHiking } from 'react-icons/fa';

const Whoami = () => {
  const [courses, setCourses] = useState([
    'Full Stack Web Development',
    'Programming Fundamentals',
    'Data Structures and Algorithms',
    
  ]);

  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = () => {
    if (newCourse.trim() !== '') {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  return (
    <div className=" bg-purple-400 p-4 rounded-md shadow-md mx-4 my-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Who Am I</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-purple-200 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaUser className="inline-block mr-2" />Name</h3>
          <p className="text-gray-700">Akash Sabe</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaBirthdayCake className="inline-block mr-2" />Birthdate</h3>
          <p className="text-gray-700">October 31, 1998</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaGraduationCap className="inline-block mr-2" />Education</h3>
          <p className="text-gray-700">Bachelors in Civil Engineering</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaSchool className="inline-block mr-2" />10th Marks</h3>
          <p className="text-gray-700">87%</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaSchool className="inline-block mr-2" />12th Marks</h3>
          <p className="text-gray-700">88%</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaSchool className="inline-block mr-2" />Graduation Marks</h3>
          <p className="text-gray-700">9.69 CGPA</p>
        </div>
         <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaHiking className="inline-block mr-2" />Hobbies</h3>
          <ul className='list-disc list-inside text-gray-700' >
            <li className='text-gray-700'>Playing Cricket</li>
            <li className='text-gray-700'>Coding</li>
            <li className='text-gray-700'>Listening Music</li>
            <li className='text-gray-700'>Traveling & Trekking</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaBook className="inline-block mr-2" />Courses</h3>
          <ul className="list-disc list-inside text-gray-700">
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add a new course"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
            <button
              onClick={handleAddCourse}
              className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md"
            >
              Add Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoami;
