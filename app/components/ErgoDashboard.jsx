import Image from "next/image";
import React from "react";

const ErgoDashboard = () => {
  return (
    <div className="max-w-7xl w-full mx-auto ">
      {/* Banner */}
      <div class="mt-10 bg-[url('/book.jpg')] bg-cover bg-center h-78 px-3">
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
    </div>
  );
};

export default ErgoDashboard;
