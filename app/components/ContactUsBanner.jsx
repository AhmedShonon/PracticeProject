import { ChevronsRight } from 'lucide-react';
import React from 'react'

const ContactUsBanner = () => {
  return (
    <div>
      <div className="relative bg-[url('/tourforeigm.jpg')] bg-cover bg-center min-h-78 h-full px-3 mb-10">
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white py-10">
          <p className="text-3xl font-bold mb-4 mt-15">Contact Us</p>
          <button className="bg-white/15 backdrop-blur text-white border-1 border-white  px-4 py-2 rounded-3xl hover:bg-gray-500 transition">
            <div className="flex">
              Home <ChevronsRight /> Contact Us
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsBanner