import React from "react";
import { GoTriangleDown } from "react-icons/go";
const CustomerList = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gray-50 ">
        <p className="py-10 text-center text-3xl font-bold">Customer List</p>
        <div className="flex justify-between max-w-7xl mx-auto">
          {/* Titles */}
          <div className="flex gap-1">
            <div>
              <p>Name</p>
            </div>
            <div>
              <GoTriangleDown className="mt-1 " />
            </div>
          </div>

          <div className="flex">
            <div>
              <p>Email</p>
            </div>
            <div>
              <GoTriangleDown className="mt-1 ml-1" />
            </div>
          </div>

          <div className="flex">
            <div>
              <p>Phone Number</p>
            </div>
            <div>
              <GoTriangleDown className="mt-1 ml-1" />
            </div>
          </div>

          <div className="flex">
            <div>
              <p>Gender</p>
            </div>
            <div>
              <GoTriangleDown className="mt-1 ml-1" />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="bg-white rounded-2xl ">
            <div className="flex mt-5 space-x-3 items-center min-w-16">
              <img
                className="max-h-7"
                src="https://avatar.iran.liara.run/public"
              />
              <p className="bg-white rounded-2xl ">John Deo</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl ">
            <p>abc@gmail.com</p>
          </div>
          <div className="bg-white rounded-2xl ">
            <p>abc@gmail.com</p>
          </div>
          <div className="bg-white rounded-2xl "></div>
          <button className="bg-blue-200 text-blue-800 px-3 rounded-2xl max-h-7  text-center h-full">
            Male
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
