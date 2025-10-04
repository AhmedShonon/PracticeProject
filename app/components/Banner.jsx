import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { TruckElectric, TruckElectricIcon } from "lucide-react";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className=" pt-10 bg-gradient-to-r from-white to-sky-500">
        <div className="flex gap-7 max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold">SETS(Sundarban Express</h1>
            <h1 className="text-3xl font-bold">
              Transportation System) Services
            </h1>
            <p className="mb-15 ">Lorem ipsum dolor sit.</p>

            <div className="flex gap-5 ">
              <div>
                <SlArrowLeft className="border border-blue-800 rounded-full text-4xl p-2 text-blue-800" />
              </div>
              <div>
                <SlArrowRight className="border border-blue-800 rounded-full text-4xl p-2 text-blue-800" />
              </div>
            </div>
          </div>

          <div className="relative min-h-60 h-full min-w-1.5 w-140 ">
            <Image src="/rocket.jpg" alt="rocket loading" fill />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
