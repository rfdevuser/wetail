import Link from 'next/link';
import React from 'react';

const FabricCard = ({ image, name, slug , price ,setSingleProduct
}) => {
  const displayName = name.split('-')[0];
  const handleOnClick=()=>{
   
    setSingleProduct(slug)
  }
 
  return (
    <Link href={`/SingleFabricDescriptionPage?id=${slug}`} as={`/SingleFabricDescriptionPage/${slug}`}>
    <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-transparent text-gray-50 p-5 mt-6" onClick={handleOnClick}>
      <div className="">
        <div className="group-hover:scale-150 w-full h-60 bg-blue-400 duration-500"   style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}></div>
        <span className="text-xl font-bold text-black text-center flex justify-center">{displayName}</span>
        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">

          <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-white"></div>
          <span className="text-xl font-bold text-black flex justify-center">{slug}</span>
          <p className="group-hover:opacity-100 w-56 duration-500 opacity-0 text-black flex justify-center">{price
} Per Meter</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default FabricCard;
