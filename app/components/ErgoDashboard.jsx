import Image from 'next/image'
import React from 'react'

const ErgoDashboard = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="relative mx-5 ">
        <div className="min-h-5 min-w-7 w-full h-99 m-5">
          <div class="bg-[url('/book.jpg')] bg-cover bg-center h-78 px-3">
            <h1 className="font-bold text-3xl text-white p-8 ml-7">
              EXPERTS IN DRUPAL,ODOO, AND ENTERPRICE SOLUTIONS
            </h1>
            <p className="text-white p-8 ml-7">
              We implement integrated digital solution to help business connect
              with customers,streamline business
            </p>
            <button className="bg-green-700 text-white p-4 ml-15">
              EXPLORE WORK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErgoDashboard