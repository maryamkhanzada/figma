import React from "react";


const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-black text-center text-4xl font-bold w-[1481px] h-[87px]">
        Choose your plan
      </h1>
      <p className="text-center text-black mt-4 w-[1481px]">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
      <div className="flex mt-8 gap-4">
        <img
          src="/card.png"
          alt="card 1"
          className="w-1/3 h-auto"
        />
        <img
          src="/card1.png"
          alt="Plan 2"
          className="w-1/3 h-auto"
        />
        <img
          src="/price-board.png"
          alt="Plan 3"
          className="w-1/3 h-auto"
        />
      </div>
    </div>
  );
};

export default Card;




 export const Card2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-black text-center text-5xl font-bold mb-8">
        What Our Clients Say
      </h1>
      <div className="flex justify-center gap-8">
        <img
          src="/client1.png"
          alt="Client 1"
          className="w-40 h-auto rounded-lg shadow-lg"
        />
        <img
          src="/client2.png"
          alt="Client 2"
          className="w-40 h-auto rounded-lg shadow-lg"
        />
        <img
          src="/client.png"
          alt="Client 3"
          className="w-40 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

