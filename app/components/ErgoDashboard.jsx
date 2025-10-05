import Image from "next/image";
import React from "react";
import { GoAlert } from "react-icons/go";
import Experience from "./Experience";
const ErgoDashboard = () => {
  return (
    <div className="max-w-7xl w-full mx-auto ">
      {/* Banner */}
      <div className="mt-10 bg-[url('/book.jpg')] bg-cover bg-center h-78 px-3">
        <h1 className="font-bold text-3xl text-white p-8 ml-7">
          EXPERTS IN DRUPAL,ODOO, AND ENTERPRICE SOLUTIONS
        </h1>
        <p className="text-white p-8 ml-7">
          We implement integrated digital solution to help business connect with
          customers,streamline business
        </p>
        <button className="bg-green-700 text-white p-4 ml-15 cursor-pointer">
          EXPLORE WORK
        </button>
      </div>
      {/* 2nd part */}
      <Experience />
      <div className="my-10 bg-[url('/greenfield.jpg')] bg-cover bg-center h-78 p-3">
        <div className="flex justify-between text-white">
          <div className="text-3xl font-bold mt-20">
            <p>Ergo Ventures is a </p>
            <p>Certified Odoo Silver</p>
            <p>Partner</p>
          </div>
          <div className="mr-7">
            <p className="text-4xl font-bold mt-20">Odoo</p>
            <button className="bg-gray-400 p-2 rounded cursor-pointer">
              Silver Partner
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold">SELECTED WORKS</p>
        <div>
          <div className="flex mt-7 gap-4  max-w-5xl mx-auto w-full">
            <div>
              <div className="relative min-h-60 h-full min-w-lg w-full ">
                <Image src="/phone1.jpg" alt="phone1 loading" fill />
              </div>
              <p className="font-bold text-black">SELF CARE APP FOR A TELCO </p>
            </div>

            <div>
              <div className="relative min-h-60 h-full min-w-lg w-full">
                <Image src="/phone2.jpg" alt="phone1 loading" fill />
              </div>
              <p className="font-bold text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur{" "}
              </p>
            </div>
          </div>
          <div className="flex mt-7 gap-4  max-w-5xl mx-auto w-full">
            <div>
              <div className="relative min-h-60 h-full min-w-lg w-full ">
                <Image src="/phone3.jpg" alt="phone1 loading" fill />
              </div>
              <p className="font-bold text-black">SELF CARE APP FOR A TELCO </p>
            </div>

            <div>
              <div className="relative min-h-60 h-full min-w-lg w-full">
                <Image src="/phone4.jpg" alt="phone1 loading" fill />
              </div>
              <p className="font-bold text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default ErgoDashboard;
