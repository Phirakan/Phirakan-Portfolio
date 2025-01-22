import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="mt-8 text-sm text-white" style={{ backgroundColor: '#5157C0' }}>
        <div>
          <p className="text-xl mt-2 px-16 text-left font-semibold text-gray-100">Contact me<br /></p>
          <a
            href="mailto:peerakan03@gmail.com"
            className="text-xl mt-2 px-16 text-left font-semibold text-gray-100"
          >
            peerakan03@gmail.com
          </a>
          <div className="flex gap-4 mt-2 px-14 flex-wrap items-center">
            <a href="https://github.com/Phirakan" target="_blank" rel="noopener noreferrer">
              <img src="github.png" alt="GitHub" className="h-8" />
            </a>
            <a href="https://web.facebook.com/Mos.peerakran/" target="_blank" rel="noopener noreferrer">
              <img src="facebook-logo-0.png" alt="Facebook" className="h-10" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="ig.png" alt="Instagram" className="h-8" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center  text-l font-semibold text-gray-100">
          © 2025 Phirakan Khongphet. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
