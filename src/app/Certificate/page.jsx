import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certificates = () => {
  const certificatesData = [
    {
      name: 'Introduction to Java',
      startDate: 'November 2022',
      endDate: 'December 2022',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate2996779c5d510e39149d460b7028bdeb5fabb37.pdf',
      status: 'Completed',
    },
    {
      name: 'Data Structures',
      startDate: 'December 2022',
      endDate: 'February 2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate29967803fbd64af8bb57167d91275a5949f2ba9.pdf',
      status: 'Completed',
    },
    {
      name: 'Frontend Web Development',
      startDate: 'March 2023',
      endDate: 'April 2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate2996782c9e4472e2a8b4fa2818c1c2c7e3e1d44.pdf',
      status: 'Completed',
    },
    {
      name: 'Backend Web Development',
      startDate: 'May 2023',
      endDate: 'July 2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate2996785f1f3337f9fb7bd413d44767ecdfd94d1.pdf',
      status: 'Completed',
    },
    {
      name: 'React',
      startDate: 'July 2023',
      endDate: 'September 2023',
      link: 'https://certificate.codingninjas.com/view/c30484889dfea5d3',
      status: 'Completed',
    },
    {
      name: 'DBMS',
      startDate: 'May 2023',
      endDate: 'July 2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate2996784f28952aff0dc8059c3ffd0d66d0fe209.pdf',
      status: 'Completed',
    },
    {
      name: 'ChatGPT',
      startDate: 'July 2023',
      endDate: 'July 2023',
      link: 'https://www.guvi.in/verify-certificate?id=601FI8769138RS32u7',
      status: 'Completed',
    },
    {
      name: 'Bun And Elysia',
      startDate: 'August 2023',
      endDate: 'Soon',
      link: 'https://example.com/certificate3',
      status: 'Progess',
    },
    {
      name: 'TypeScript',
      startDate: 'August 2023',
      endDate: 'Soon',
      link: 'https://example.com/certificate3',
      status: 'Progess',
    },
  ];

  return (
    <div className=" bg-purple-400 p-4 rounded-md shadow-md mx-4 my-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificatesData.map((certificate, index) => (
          <a key={index} href={certificate.link} target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <FaCertificate className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">{certificate.name}</h3>
              </div>
              <p className="text-gray-700">Start Date: {certificate.startDate}</p>
              <p className="text-gray-700">End Date: {certificate.endDate}</p>
              <p className="text-gray-700">Status: {certificate.status}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
