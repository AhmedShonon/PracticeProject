import { Earth, Users } from 'lucide-react';
import React from 'react'

const AboutUsTurmet = () => {
  return (
    <div className="bg-[#1ca8cb] min-h-64 ">
      <div className=" ">
        <div className="max-w-7xl w-full h-full min-h-64  mx-auto grid grid-cols-1 md:grid-cols-4 justify-center items-center ">
          <div className="flex flex-col justify-center items-center border-r border-r-[#a4acb9] border-dashed">
            <Users className="text-white mb-7 " size={45} />
            <p className="text-3xl text-white">100,000+</p>
            <p className="text-white">Our Explorers</p>
          </div>
          <div className="flex flex-col justify-center items-center border-r border-r-[#a4acb9] border-dashed">
            <Users className="text-white mb-7 " size={45} />
            <p className="text-3xl text-white">100,000+</p>
            <p className="text-white">Destination</p>
          </div>
          <div className="flex flex-col justify-center items-center border-r border-r-[#a4acb9] border-dashed">
            <Earth className="text-white mb-7 " size={45} />
            <p className="text-3xl text-white">100,000+</p>
            <p className="text-white">More tips</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Earth  className="text-white mb-7 " size={45} />
            <p className="text-3xl text-white">100,000+</p>
            <p className="text-white">Luxery Hotel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsTurmet