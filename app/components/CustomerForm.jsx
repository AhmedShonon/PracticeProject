"use client";
import React, { useState } from "react";

const CustomerForm = () => {
  const [cname, setCname] = useState("");

  const handleSubmit = () => {
    console.log("Form Sumitted");
  };

  return (
    <div>
      <div className="bg-gray-200 p-10">
        <div className="bg-white my-5 px-5 py-10 mx-auto max-w-7xl rounded-2xl">
          <p className="text-3xl font-bold my-5">Customer Contact</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil
            molestiae quasi, nobis quam fugit consectetur id laborum, quas
            doloribus tenetur?
          </p>
          <div className="pt-4 ">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  value={cname}
                  id="companyName"
                  type="text"
                  onChange={() => setCname(value)}
                  placeholder="Enter your company name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Mobile Number
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Enter your company name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <div className="relative inline-block w-full ">
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-500"
                    placeholder="Enter your company name"
                  />
                  <span className="absolute top-1/2 left-52 transform -translate-y-1/2 text-orange-500 text-sm">
                    *
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  required
                  id="companyName"
                  type="text"
                  placeholder="Enter your company name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="min-h-10 bg-blue-700 text-white min-w-12 px-4 rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
