import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa'; // Import the icons from the library

const Footer = () => {
  return (
    <footer className="body text-white py-4">
      <div className='border-b-[#2d2c2c] border-b-[2px]' style={{marginBottom:"20px"}}></div>
      <div className="container mx-auto text-center text-gray-500">
        <p className="font-bold rowdies-bold">&copy; 2024 All rights reserved. Team Mavericks</p>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="flex items-center">
            <a href="https://github.com/ADITYAVOFFICIAL/Fortuna" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 rowdies-bold flex items-center mr-5">
              <FaGithub className="mr-1" /> GitHub
            </a>
            <a href="https://devfolio.co/projects/fortuna-0a7b" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 rowdies-bold flex items-center">
              <FaCode className="mr-1" /> Devfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
