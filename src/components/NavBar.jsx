import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#f4f6fa] to-[#e3e9f4] shadow-md border-b border-[#d3dae5]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        
        <div className="text-2xl font-extrabold bg-gradient-to-r from-[#6E8BC2] to-[#42495D] text-transparent bg-clip-text tracking-wide">
          Grace's Space
        </div>

      
        <div className="hidden md:flex gap-6 text-sm font-medium text-[#42495D]">
          <span className="cursor-default">Frontend Developer</span>
          <span className="cursor-default">Creative Thinker</span>
          <span className="cursor-default">React Enthusiast</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
