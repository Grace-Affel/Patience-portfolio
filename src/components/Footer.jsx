import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center py-6 px-8 text-sm text-[#42495D]/80">
      &copy; {new Date().getFullYear()} Patience Affel. All rights reserved.
    </footer>
  );
};

export default Footer;
