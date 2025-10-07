
import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const AboutUsTourGuide = () => {
  return (
    <div>
      <div className="mt-10 text-center">
        <p className="italic text-[#1ca8ce] ">Meet with guide</p>
        <p className="text-5xl font-bold mt-5">Tour Guide</p>

        <div className="grid grid-rows-1 md:grid-cols-4 justify-center items-center max-w-7xl gap-10 md:gap-0 mx-auto">
          <div className=" w-full max-w-50 h-50 relative">
            <Image
              src="/tourguide1.jpg"
              width={200}
              height={200}
              className="rounded-2xl object-cover w-full h-full"
              alt="Tour Guide"
            />
            <div className="absolute  top-[81%] py-1 px-3 right-1 md:top-[71%] md:right-2 bg-white md:px-3 md:py-3 shadow-2xl rounded-2xl">
              <p className="font-bold text-md md:text-lg relative">
                Darlene Robertson
              </p>
              <p className=" bg-[#1ca8cb] text-white absolute rounded-4xl p-2 top-[-15%] right-[7%]">
                <Link size={15} />
              </p>
              <p className="font-extralight text-sm mt-1 text-gray-400">
                Tourist Guide
              </p>
            </div>
          </div>
          <div className=" w-full max-w-50 h-50 relative">
            <Image
              src="/tourguide2.jpg"
              width={200}
              height={200}
              className="rounded-2xl object-cover w-full h-full"
              alt="Tour Guide"
            />
            <div className="absolute  top-[81%] py-1 px-3 right-1 md:top-[71%] md:right-2 bg-white md:px-3 md:py-3 shadow-2xl rounded-2xl">
              <p className="font-bold text-md md:text-lg relative">
                Darlene Robertson
              </p>
              <p className=" bg-[#1ca8cb] text-white absolute rounded-4xl p-1.5 md:p-2 top-[-15%] right-[7%]">
                <Link  className=' size-2 md:size-3.5 ' />
              </p>
              <p className="font-extralight text-sm mt-1 text-gray-400">
                Tourist Guide
              </p>
            </div>
          </div>
          <div className=" w-full max-w-50 h-50 relative">
            <Image
              src="/tourguide3.jpg"
              width={200}
              height={200}
              className="rounded-2xl object-cover w-full h-full"
              alt="Tour Guide"
            />
            <div className="absolute  top-[81%] py-1 px-3 right-1 md:top-[71%] md:right-2 bg-white md:px-3 md:py-3 shadow-2xl rounded-2xl">
              <p className="font-bold text-md md:text-lg relative">
                Darlene Robertson
              </p>
              <p className=" bg-[#1ca8cb] text-white absolute rounded-4xl p-2 top-[-15%] right-[7%]">
                <Link size={15} />
              </p>
              <p className="font-extralight text-sm mt-1 text-gray-400">
                Tourist Guide
              </p>
            </div>
          </div>
          <div className=" w-full max-w-50 h-50 relative">
            <Image
              src="/tourguide4.jpg"
              width={200}
              height={200}
              className="rounded-2xl object-cover w-full h-full"
              alt="Tour Guide"
            />
            <div className="absolute  top-[81%] py-1 px-3 right-1 md:top-[71%] md:right-2 bg-white md:px-3 md:py-3 shadow-2xl rounded-2xl">
              <p className="font-bold text-md md:text-lg relative">
                Darlene Robertson
              </p>
              <p className=" bg-[#1ca8cb] text-white absolute rounded-4xl p-2 top-[-15%] right-[7%]">
                <Link size={15} />
              </p>
              <p className="font-extralight text-sm mt-1 text-gray-400">
                Tourist Guide
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsTourGuide