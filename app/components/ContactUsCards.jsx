import { MailOpen, MapPinned, PhoneCall } from 'lucide-react';
import React from 'react'

const ContactUsCards = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-3 p-4 mb-10">
              <div className="bg-gray-100 rounded-2xl p-5 ">
                <div className="border-1 p-3 rounded-2xl border-gray-300 ">
                  <MapPinned size={70} className="mx-auto text-[#1da9cc]" />
                  <p className="text-2xl font-bold">Our Address</p>
                  <p className="font-extralight text-gray-400 inline-block border-b-2 border-dotted border-gray-400 pb-1">
                    2464 RoyalLn.Mesa,New Jersey
                  </p>
                  <br />
                  <p className="font-extralight text-gray-400 inline-block border-b-2 border-dotted border-gray-400 pb-1">
                    45463
                  </p>
                </div>
              </div>
              {/* 2nd card */}
              <div className="bg-[#1da9cc] text-white p-5 rounded-2xl">
                <div className="border-1 rounded-2xl border-gray-300 p-7">
                  <MailOpen size={70} className="mx-auto text-white" />
                  <p className="text-2xl font-bold">Info@Tripco.com</p>
                  <p className="font-extralight text-white ">
                    Email Us anytime for anykind ofquety.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-5">
                <div className=" p-3 border-gray-300 items-center border-1 rounded-2xl">
                  <PhoneCall size={70} className="mx-auto text-[#1da9cc]" />
                  <p className="text-2xl font-bold">Hot:+208-666-0112</p>
                  <p className="font-extralight text-gray-400 inline-block border-b-2 border-dotted border-gray-400 pb-1">
                    Call us any kind support,we will wait for it.
                  </p>
                  <br />
                  <p className="font-extralight text-gray-400 inline-block border-b-2 border-dotted border-gray-400 pb-1">
                    for it
                  </p>
                </div>
              </div>
            </div>
    </div>
  );
}

export default ContactUsCards