import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-300">
        <div className="space-y-4">
          <div>
            <a href="#" className="hover:text-white">Privacy Policy</a> | 
            <a href="#" className="hover:text-white"> Terms of Service</a>
          </div>
          <div>
            © 2024 MyApp. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
