import React from "react";
import Image from 'next/image';

const Hero = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#043873] px-4">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
          {/* Left Content */}
          <div className="text-white md:pr-8  md:mb-0 flex-1">
            <h1 className="text-4xl font-bold " style={{ width: '656px', height: '50px' }}>
            Get More Done with whitepace
            </h1>
            <p className="text-gray-300 mb-6" style={{ width: '656px', height: '60px' }}>
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
            </p>
            <button
              className="flex items-center px-6 py-3 bg-[#4F9CF9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Try whitespace free
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
  
          {/* Right Image */}
          <div className="flex-1">
            <Image
              src="/Image-container.png"
              alt="Hero Section Image"
              className="rounded-lg"
              width={900}
              height={549} // Adjust height as needed
            />
         
      </div> 
      </div>
        </div>
    );
  }
  

  export default Hero;


  export const Hero1 = () =>{
    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
          {/* Left Content */}
          <div className="text-black md:pr-8  md:mb-0 flex-1">
            <h1 className="text-4xl font-bold " style={{ width: '656px', height: '50px' }}>
            Project Management
            </h1>
            <p className="text-black mb-6" style={{ width: '656px', height: '60px' }}>
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button
              className="flex items-center px-6 py-3 bg-[#4F9CF9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
            >
             Get Started
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
  
          {/* Right Image */}
          <div className="flex-1">
            <Image
              src="/Image-container.png"
              alt="Hero Section Image"
              className="rounded-lg"
              width={900}
              height={549} // Adjust height as needed
            />
        </div>
        </div>
        </div>
      )

  }

  export const Hero2 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
        {/* Left Image */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <Image
            src="/Work Together Image.png"
            alt="Hero Section Image"
            className="rounded-lg"
            width={656}
            height={400} // Adjust height as needed
          />
        </div>

        {/* Right Content */}
        <div className="text-black flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Work together
          </h1>
          <p className="text-black mb-6">
            With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <button
            className="flex items-center px-6 py-3 bg-[#4F9CF9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Try it now
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export const Hero3 = () =>{
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#043873] px-4">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
          {/* Left Content */}
          <div className="text-[#FFFFFF] md:pr-8  md:mb-0 flex-1">
            <h1 className="text-4xl font-bold " style={{ width: '656px', height: '50px' }}>
            Use as Extension
            </h1>
            <p className="text-[#FFFFFF] mb-6" style={{ width: '656px', height: '60px' }}>
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

            </p>
            <button
              className="flex items-center px-6 py-3 bg-[#4F9CF9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
            >
            Let’s Go
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
  
          {/* Right Image */}
          <div className="flex-1">
            <Image
              src="/Image-container.png"
              alt="Hero Section Image"
              className="rounded-lg"
              width={900}
              height={549} // Adjust height as needed
            />
        </div>
        </div>
        </div>
      )

  }

  export const Hero4 = () =>{
    return (<div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
        {/* Left Image */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <Image
            src="/Image-container.png"
            alt="Image"
            className="rounded-lg"
            width={656}
            height={400} // Adjust height as needed
          />
        </div>

        {/* Right Content */}
        <div className="text-black flex-1">
          <h1 className="text-4xl font-bold mb-4">
          Customise it
          to your needs
          </h1>
          <p className="text-black mb-6">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button
            className="flex items-center px-6 py-3 bg-[#4F9CF9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Try it now
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

        
    
  
      
              



   

 export const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#043873] p-4">
      <h1 className="text-white text-center text-4xl font-bold w-[1481px] h-[87px]">
        Your work, everywhere you are
      </h1>
      <p className="text-center text-white mt-4 w-[900px]">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitespace, Dropbox, and OneDrive. The
        app is available on Windows, macOS, Linux, Android, and iOS. A terminal
        app is also available!
      </p>
      <button className="mt-8 bg-[#4F9CF9] text-white flex items-center px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
        Try Tasky
        <span className="ml-2 text-xl">&rarr;</span>
      </button>
    </div>
  );
};


 export const Hero5  = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
        {/* Left Content */}
        <div className="text-black md:pr-8  md:mb-0 flex-1">
          <h1 className="text-5xl font-bold " style={{ width: '656px', height: '50px' }}>
          100% your data
          </h1>
          <br />
          <p className="text-black mb-6" style={{ width: '656px', height: '60px' }}>
          The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
          <br />
          <button
            className="flex items-center px-6 py-3 bg-[#4F9CF9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Read more
            <span className="ml-2">&rarr;</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/Element.png"
            alt="Element"
            className="rounded-lg"
            width={1200}
            height={900} // Adjust height as needed
          />
       
    </div> 
    </div>
      </div>
  );
}




 export const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-black text-center text-5xl font-bold mb-8">
        Our Sponsors
      </h1>
      <br />
      
      <div className="flex flex-wrap justify-center gap-10">
        <img
          src="/Apple.png"
          alt="Apple"
          className="w-70 h-auto"
        />
        <br />
        <br />
        <br />
        <img
          src="/microsoft 1.png"
          alt="microsoft"
          className="w-70 h-auto"
        />
        <br />
        <br />
        <br />
        <img
          src="/slack_Technologies_Logo 1.png"
          alt="slack"
          className="w-70 h-auto"
        />
        <br />
        <br />
        <br />
        <img
          src="/Group 246.png"
          alt="Sponsor 4"
          className="w-70 h-auto"
        />
      </div>
    </div>
  );
};

export const Apps = () => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-[#043873] px-4">
    <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
      {/* Left Image */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <Image
          src="/Apps.png"
          alt="Apps.png"
          className="rounded-lg"
          width={656}
          height={400} // Adjust height as needed
        />
      </div>

      {/* Right Content */}
      <div className="text-white flex-1">
        <h1 className="text-5xl font-bold mb-4">
        Work with Your Favorite Apps Using whitepace
        </h1>
        <p className="text-white text-[15px] mb-6">
        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <button
          className="flex items-center px-6 py-3 bg-[#4F9CF9] text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Read more
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  </div>
);
}







 

 