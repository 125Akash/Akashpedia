"use client"

import React from 'react';
import { FaLaptop, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: 'Ipod Music Player',
      description: 'This a Ipod Music Player. Which has UI Like a ipod player.Which is Made by using React. JavaScript. Node.js.',
      liveLink: 'https://ipod25.netlify.app/',
      githubLink: 'https://github.com/125Akash/Ipod_Project',
      
    },
    {
      title: 'React Chat App',
      description: 'React Based Chat app which is Clone of Whatapp made by using React.',
      liveLink: 'https://chataappreact.netlify.app/#/',
      githubLink: 'https://github.com/125Akash/React_Chat_App',
    },
    {
      title: 'Contact List App',
      description: 'Design and Build a contact list app using React and Node.js also using javascript.',
      liveLink: 'https://contactlistiphonebook.netlify.app/',
      githubLink: 'https://github.com/125Akash/Contact_list',
    },
    {
      title: 'Todo_App',
      description: 'Design and Build a Todo App using React and Node.js also using javascript.',
      liveLink: 'https://akashtodoapp.netlify.app/',
      githubLink: 'https://github.com/125Akash/Todo_App_React.js',
    },
    {
      title: 'akash-meal-module',
      description: 'Design and build by using html, css, javascript, bootstrap.',
      liveLink: 'https://125akash.github.io/akash-meal-module/',
      githubLink: 'https://github.com/125Akash/akash-meal-module',
    },
    {
      title: 'BeyondBonds',
      description: 'Social Media Application Build by using React.js , Node.js, javascript, tailwindcss and Data base. as MongoDB.',
      githubLink: 'https://github.com/125Akash/BeyondBonds',
      
    },
    {
      title: 'JellyFish DropDown',
      description: 'Build a Simple Dropdown using React.js , Node.js With Live Background.',
      liveLink: 'https://jellyfistdropdown.netlify.app/',
      githubLink: 'https://github.com/125Akash/Jellyfish_dropDown',
      
    },
    {
      title: 'JellyFish DropDown',
      description: 'Build a Simple Dropdown using React.js , Node.js With Live Background.',
      liveLink: 'https://jellyfistdropdown.netlify.app/',
      githubLink: 'https://github.com/125Akash/Jellyfish_dropDown',
      
    },
    {
      title: 'BusyBuy',
      description: 'Build Using React.js, Node.js and database used is Firebase.',
      liveLink: 'https://github.com/125Akash/BusyBuy_Ecommerce',
      githubLink: 'https://github.com/125Akash/BusyBuy_Ecommerce',
      
    },
    {
      title: 'Akash_Resume',
      description: 'Build Using Simple Html ,css And Javascript',
      liveLink: 'https://125akash.github.io/Akash_resume/',
      githubLink: 'https://github.com/125Akash/Akash_resume',
      
    },
  ];

  return (
    <div className="bg-purple-400 bg-opacity-90 p-4 rounded-md shadow-md mx-4 my-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <div className="flex mt-4">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                <FaLaptop className="mr-2" />
                Live Site
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="ml-4 flex items-center text-gray-600 hover:text-gray-800 hover:underline">
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
