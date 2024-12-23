import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
      <footer className="bg-[#043873]  text-white py-16 px-8">
        {/* Centered Content */}
        <div className="text-center">
          <h1 className="text-[20px] font-bold mb-4 whitespace-nowrap"> Try Whitespace today</h1>
          <p className="text-lg mb-4">Get started for free</p>
          <p className="text-sm mb-6">Add your whole team as your needs grow</p>
          <button className="bg-sky-500 text-white px-6 py-2 rounded mb-8">
            Try Taskey Free
            <span className="ml-2">&rarr;</span>
            </button>
          <p className="text-sm mb-6">On a big team? Contact sales</p>
        </div>
  
        {/* Flex Images */}
        <div className="flex justify-center gap-6 mb-16">
          <Image src="/apple-black-logo 2.png" alt="apple" className="w-20 h-20" />
          <Image src="/windows-logo 1.png" alt="windows" className="w-20 h-20" />
          <Image src="/android-logo 1.png" alt="android" className="w-20 h-20" />
        </div>
        <br />
        <br />
        <br />
  
        {/* Two Column Flex Layout */}
        <div className="flex p-4  items-center justify-between ">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            
           <span className="text-white  text-[30px] ml-2">Whitespace</span>
            <p className="text-sm">
            whitepace was created for the new 
            <br />
            ways we live and work. We make a 
            <br />
            better workspace around the world
            </p>
          </div>
  
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[15px] font-semibold">Product</h2>
            <p className="text-[#FFE492]">Overview</p>
            <p>Pricing</p>
            <p>Customer Stories</p>
          </div>
          <br />
          <br />
  
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-[15px] font-semibold">Resources</h2>
            <p>Blog</p>
            <p>Guides & Tutorials</p>
            <p>Help Center</p>
          </div>
          <br />
          <br />
  
          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-[15px] font-semibold">Company</h2>
            <p>About Us</p>
            <p>Careers</p>
            <p>Media Kit</p>
          </div>
          <br />
          <br />
  
          {/* Column 5 */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-semibold">Try it Today</h2>
            <br />
            <p className="text-sm">Get started for free.
                <br />
                 Add your whole team as your needs grow.</p>
                 <br />
            <button className="bg-[#4F9CF9] text-white px-6 py-3 rounded">
                Start Today
                <span className="ml-2">&rarr;</span>

            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  