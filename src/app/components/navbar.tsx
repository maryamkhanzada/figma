import Image from 'next/image';
import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-[#043873] p-4 flex items-center justify-between">
      
      <div className="flex items-center">
      <Image src="/Logo Icon.png" alt="Logo Icon" layout="responsive" width={500} height={500} />
        <span className="text-white ml-2">Whitespace</span>
      </div>

      
      <div className="flex items-center space-x-6">
       
        <a href="#" className="text-white">Products  </a>
        <a href="#" className="text-white">Solutions </a>
        <a href="#" className="text-white">Resources </a>
        <a href="#" className="text-white">Pricing </a>
      </div>

      
      <div className="flex items-center space-x-4">
        <button className="bg-[#FFE492] text-black px-4 py-2 rounded">Login</button>
        <button className="bg-[#4F9CF9] text-white px-6 py-3 rounded">Try Whitespace Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
