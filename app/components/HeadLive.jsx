import { MailCheck, MapPin, MessagesSquare } from 'lucide-react';
import React from 'react'

const HeadLive = () => {
  return (
    <div>
      {/* Head Live Email */}
      <div className="bg-blue-900">
        <div className="grid grid-cols-3 max-w-7xl mx-auto gap-4">
          <div className="text-white text-center px-4 py-10 space-y-4">
            <MapPin className="mx-auto" size={30} />
            <p className="font-bold text-2xl">Head Office</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              id? Nemo.
            </p>
          </div>
          <div className="text-white text-center px-4 py-10 space-y-4">
            <MessagesSquare className="mx-auto" size={30} />
            <p className="font-bold text-2xl">Live Chat</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              id? Nemo.
            </p>
          </div>
          <div className="text-white text-center px-4 py-10 space-y-4">
            <MailCheck className="mx-auto" size={30} />
            <p className="font-bold text-2xl">Email Contact</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              id? Nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadLive