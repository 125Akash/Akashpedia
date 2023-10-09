"use client";
import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const ContactMe = () => {
  const [comments, setComments] = useState(['This is a great website!',
    'I love your work!',
    'Looking forward to connecting on LinkedIn.']);
  const [newComment, setNewComment] = useState('');
  
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="bg-purple-200 bg-opacity-80 p-4 rounded-md shadow-md mx-4 my-4">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/akash-sabe-09017a208/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/akashsabe_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          <FaInstagram className="text-4xl" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006549406192"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          <FaFacebook className="text-4xl" />
        </a>
        <a
          href="https://github.com/125Akash"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          <FaGithub className="text-4xl" />
        </a>
      </div>

      <div className="mt-8">
        <div className="text-gray-900 text-center">
          <h1 className="text-3xl font-bold mb-4">
            Contact Me On{' '}
            <span className="text-red-600">
              <Typewriter
                words={[
                  '"sabeakash125@gmail.com"',
                  '"darkmashllow125@gmail.com"',
                  'LinkedIn',
                  'Instagram',
                  'Facebook',
                  'Github',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>

        <h3 className="text-xl font-semibold mb-2">Leave a Comment</h3>
        <form onSubmit={handleCommentSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 w-full h-32"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center bg-purple-600 h-max text-white py-2 px-4 rounded-md hover:bg-purple-700"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 border border-gray-300 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mb-2">
                {comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
