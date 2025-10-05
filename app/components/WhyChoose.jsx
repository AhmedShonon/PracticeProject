import { BrickWallShield } from 'lucide-react';
import React from 'react'

const WhyChoose = () => {
  return (
    <div>
      {/* Why Choose Sets */}
      <div className="bg-blue-800 text-white pb-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-3xl font-bold pt-10">Why Choose SETS</p>
          <p className="py-13">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nemo mollitia temporibus facilis dignissimos consequuntur aliquid?
            Sunt, maxime maiores! Voluptatem, aperiam. Nam illo dolor obcaecati.
            Consequatur, saepe. Tempore quam alias hic unde nisi?
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 max-w-7xl mx-auto ">
          <div className="bg-white text-center space-y-5 px-5 py-3 rounded-2xl">
            <BrickWallShield className="text-blue-800 mx-auto" size={30} />
            <p className="text-black font-bold text-2xl">Speed</p>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ducimus at?
            </p>
          </div>
          <div className="bg-white text-center space-y-5 px-5 py-3 rounded-2xl">
            <BrickWallShield className="text-blue-800 mx-auto" size={30} />
            <p className="text-black font-bold text-2xl">Speed</p>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ducimus at?
            </p>
          </div>
          <div className="bg-white text-center space-y-5 px-5 py-3 rounded-2xl">
            <BrickWallShield className="text-blue-800 mx-auto" size={30} />
            <p className="text-black font-bold text-2xl">Speed</p>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ducimus at?
            </p>
          </div>
          <div className="bg-white text-center space-y-5 px-5 py-3 rounded-2xl">
            <BrickWallShield className="text-blue-800 mx-auto" size={30} />
            <p className="text-black font-bold text-2xl">Speed</p>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ducimus at?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose