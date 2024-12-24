import Image from 'next/image';
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
      <Image src="/card.png" alt="Card Image"  width={260} height={180} />
      <Image src="/card1.png" alt="Card1 Image"width={260} height={180} />
      <Image src="/Price-board.png" alt="Price Image"  width={260} height={180} />
       
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
      <Image src="/client1.png" alt="client1"  width={300} height={200} />
      <Image src="/Client2.png" alt="Client2"  width={300} height={100} />
      <Image src="/Client.png" alt="Client"  width={300} height={100} />
      </div>
    </div>
  );
};

