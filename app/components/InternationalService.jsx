import { PackageOpen } from 'lucide-react';
import React from 'react'

const InternationalService = () => {
  return (
    <div>
      {/* Internatinal Service */}
      <div className="text-center max-w-7xl mx-auto ">
        <div className="px-10 pb-5">
          <p className="text-center text-3xl font-bold my-10">
            International Services
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            ducimus maxime dolores dignissimos iste laborum harum aspernatur,
            quod totam odio voluptate repellat quos corrupti fugit ullam sint
            et, nam beatae repudiandae excepturi laboriosam eius. Recusandae
            velit adipisci sunt cum quidem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Autem voluptatum laborum porro sunt,
            labore illo dicta est velit aperiam laudantium voluptatem?
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-white mb-10">
          <div className="bg-blue-800 border rounded-md py-15 px-5 space-y-5">
            <PackageOpen className="mx-auto " size={30} />
            <p className="font-bold">Lorem, ipsum dolor.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, fugiat atque quas harum nulla nesciunt assumenda,
              dolores aspernatur, porro illum odio architecto repellendus non
              repudiandae necessitatibus? Officiis corporis iste atque facere
              beatae eum?
            </p>
          </div>
          <div className="bg-blue-800 border rounded py-15 px-5 space-y-5">
            <PackageOpen className="mx-auto" size={30} />
            <p className="font-bold">Lorem, ipsum dolor.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, fugiat atque quas harum nulla nesciunt assumenda,
              dolores aspernatur, porro illum odio architecto repellendus non
              repudiandae necessitatibus? Officiis corporis iste atque facere
              beatae eum?
            </p>
          </div>
          <div className="bg-blue-800 border rounded py-15 px-5 space-y-5">
            <PackageOpen className="mx-auto " size={30} />
            <p className="font-bold">Lorem, ipsum dolor.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, fugiat atque quas harum nulla nesciunt assumenda,
              dolores aspernatur, porro illum odio architecto repellendus non
              repudiandae necessitatibus? Officiis corporis iste atque facere
              beatae eum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternationalService