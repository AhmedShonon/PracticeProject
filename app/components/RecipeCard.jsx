import React from "react";
import Image from "next/image";

const RecipeCard = () => {
  return (
    <div className="bg-white min-h-80 space-y-4 p-4 mx-auto max-w-[600px] width-full mt-16 mb-16 border border-gray-400 rounded-xl">
      <div className="bg-white  px-4 relative ">
        <div className="min-h-32 min-w-16 h-full w-full">
          <Image
            className="rounded-xl "
            objectFit="cover"
            src="/image-omelette.jpeg"
            fill
            alt="omelette"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Simple Omelet Recipe</h1>
        <p>
          An easy and quick dish,perfect for any meal.This classic omelette
          combines beaten eggs cooked to perfection,optionally filled with your
          choice of cheese,vegetables, or meals
        </p>

        <div className="p-5 bg-pink-50 rounded-xl mt-2">
          <b className="text-md text-rose-900">Preparation time</b>
          <ul className="list-disc px-4">
            <li>
              <b>Total:</b>Approximately 10 minutes
            </li>
            <li>
              <b>Preparation:</b>5 minutes
            </li>
            <li>
              <b>Cooking:</b>5 minutes
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-amber-800 ">Ingredients</h1>
        <ul className="list-disc px-4 mt-2 ">
          <li className="mt-2">2-3 large eggs</li>
          <li className="mt-2">Salt, to taste</li>
          <li className="mt-2">Pepper, to taste</li>
          <li className="mt-2">1 tablespoon of butter or oil</li>
          <li className="mt-2">
            Optional fillings: cheese,diced vegetables,cooked meats,herbs
          </li>
        </ul>
      </div>
      <hr />

      {/*  Instructions*/}
      <div>
        <h1 className="text-3xl text-amber-800 mb-2 ">Instructions</h1>
        <ol className="list-decimal px-7 marker:text-amber-800 marker:font-bold space-y-2">
          <li className="">
            <p className="font-bold ">Beat the eggs:</p>
            <p>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a flutter texture.
            </p>
          </li>
          <li>
            <b>Heat the pan:</b>
            <p>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </p>
          </li>
          <li>
            <b>Cook the omelette:</b>
            <p>
              Once the butter is melted and building,pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </p>
          </li>
          <li>
            <b>Add fillings optional:</b>
            <p>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </p>
          </li>
          <li>
            <b>Fold and serve:</b>
            <p>
              As the omelette continues to cook,carefully lift one edge and fold
              ir over the fillings. Let it cook for another minutes,then slide
              it onto a plate.
            </p>
          </li>
          <li>
            <b>Enjoy:</b>
            <p>Serve hot,with additional salt and pepper if needed.</p>
          </li>
        </ol>
      </div>

      {/*  Nutrition*/}
      <div className="space-y-2">
        <h1 className="text-3xl text-amber-800 mb-2">Nutrition</h1>
        <p>
          The table below nutritional values per serving without the additional
          fillings
        </p>
        <div className="flex border-b-1 border-gray-300 gap-56 mt-2 pb-2 ">
          <p className="min-w-16 ml-7">Calories</p>
          <p className="text-amber-800 font-bold">277kcal</p>
        </div>
        <div className="flex border-b-1 border-gray-300 gap-56 pb-2">
          <p className="min-w-16 ml-7">Carbs</p>
          <p className="text-amber-800 font-bold">0g</p>
        </div>
        <div className="flex border-b-1 border-gray-300 gap-56 pb-2">
          <p className="min-w-16 ml-7">Protein </p>
          <p className="text-amber-800 font-bold">20g</p>
        </div>
        <div className="flex  gap-56">
          <p className="min-w-16 ml-7">Fat</p>
          <p className="text-amber-800 font-bold">22g</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
