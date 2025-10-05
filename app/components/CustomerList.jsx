import React from "react";
import { GoTriangleDown } from "react-icons/go";
const CustomerList = () => {
  const customerDetails = [
    {
      id: 1,
      name: "Sabbir Ahmed Shonon",
      img: "https://avatar.iran.liara.run/public",
      email: "amiShonon@gmail.com",
      phoneNumber: "+01883266793",
      gender: "Male",
    },
    {
      id: 2,
      name: "Tanvir Hasan Serazy",
      img: "https://avatar.iran.liara.run/public",
      email: "amiHasan@gmail.com",
      phoneNumber: "+01883266793",
      gender: "Male",
    },
    {
      id: 3,
      name: "Sowat Bhai",
      img: "https://avatar.iran.liara.run/public",
      email: "amiSowat@gmail.com",
      phoneNumber: "+01883266793",
      gender: "Male",
    },
    {
      id: 4,
      name: "Romel Bhai",
      img: "https://avatar.iran.liara.run/public",
      email: "amiRomel@gmail.com",
      phoneNumber: "+01883266793",
      gender: "female",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <p className="py-10 text-center text-3xl font-bold">Customer List</p>
        {/* Titles */}
        <div className="flex justify-between max-w-7xl mx-auto overflow-x-auto hover:bg-blue-400">
          <div className="flex gap-1">
            <p>Name</p>
            <div>
              <GoTriangleDown className="mt-1 " />
            </div>
          </div>

          <div className="flex">
            <p>Email</p>
            <div>
              <GoTriangleDown className="mt-1 ml-1" />
            </div>
          </div>

          <div className="flex">
            <p>Phone Number</p>
            <div>
              <GoTriangleDown className="mt-1 ml-1" />
            </div>
          </div>

          <div className="flex">
            <p>Gender</p>
            <div>
              <GoTriangleDown className="mt-1 ml-1" />
            </div>
          </div>
        </div>
        {/* content */}

        {customerDetails?.map((data) => (
          <div key={data.id} className="flex justify-between mt-5">
            <div className="rounded-2xl min-w-52">
              <div className="flex space-x-3 min-w-16">
                <img className="max-h-7" src={data.img} alt="avatar" />
                <p className=" rounded-2xl ">{data?.name}</p>
              </div>
            </div>
            <div className=" rounded-2xl min-w-56">
              <p>{data?.email}</p>
            </div>
            <div className=" rounded-2xl ">
              <p>{data?.phoneNumber}</p>
            </div>
            <div className=" rounded-2xl min-w-10"></div>
            <button className="bg-blue-200 text-blue-800 px-3 rounded-2xl max-h-7  text-center h-full">
              {data?.gender}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
