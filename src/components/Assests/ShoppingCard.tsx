"use client"
import Link from 'next/link';
import React from 'react';

interface ShoppingCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ name, price, image }) => {
  const displayName = name;
  console.log(displayName)
  return (
    <Link href={`/SingleBlouseDescriptionPage?id=${name}`} as={`/SingleBlouseDescriptionPage/${name}`}>
    <div className="w-80 h-120 bg-trasnparent p-3 flex flex-col gap-1 rounded-br-3xl mt-6 -mx-2">
      <div 
        className="duration-500 justify-items-center h-48 bg-transparent hover:contrast-100 rounded-br-xl" 
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
       
        }}
      />
      <div className="flex flex-col gap-4">
        
          <div className="flex flex-col justify-center">
            <span className="text-xl text-black font-bold   flex justify-center mt-2">{displayName}</span>
        
          <div className="font-bold text-green-600 flex justify-center mt-2">Price: {price}</div>
          </div>
        </div>
      
   
  <button className="hover:bg-sky-700 text-white-50 bg-gradient-to-br from-[#F97794] to-[#623AA2] py-2 rounded-br-xl w-full mt-2"><strong>Add to cart</strong></button>

      </div>


    </Link>
  );
}

export default ShoppingCard;
