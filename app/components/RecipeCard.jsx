import React from "react";
import Image from "next/image";

const RecipeCard = () => {
  return (
    <div className="bg-amber-50 min-h-80 space-y-4 p-4 mx-auto max-w-[600px] width-full mt-16 mb-16 border border-gray-400 rounded-xl">
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

        <div>
          <b>Preparation time</b>
          <ul>
            <b>Total:</b>Approximately 10 minutes
          </ul>
          <ul>
            <b>Preparation:</b>5 minutes
          </ul>
          <ul>
            <b>Cooking:</b>5 minutes
          </ul>
        </div>
      </div>
      <div>
        <h1>Ingredients</h1>
        <ul>2-3 large eggs</ul>
        <ul>Salt, to taste</ul>
        <ul>Pepper, to taste</ul>
        <ul>1 tablespoon of butter or oil</ul>
        <ul>Optional fillings: cheese,diced vegetables,cooked meats,herbs</ul>
      </div>
      <hr />

      {/*  Instructions*/}
      <div>
        <h1>Instructions</h1>
        <ol>
          <b>Beat the eggs:</b>
          <p>
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            flutter texture.
          </p>
        </ol>
        <ol>
          <b>Heat the pan:</b>
          <p>
            Place a non-stick frying pan over medium heat and add butter or oil.
          </p>
        </ol>
        <ol>
          <b>Cook the omelette:</b>
          <p>
            Once the butter is melted and building,pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </p>
        </ol>
        <ol>
          <b>Add fillings optional:</b>
          <p>
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </p>
        </ol>
        <ol>
          <b>Fold and serve:</b>
          <p>
            As the omelette continues to cook,carefully lift one edge and fold
            ir over the fillings. Let it cook for another minutes,then slide it
            onto a plate.
          </p>
        </ol>
        <ol>
          <b>Enjoy:</b>
          <p>Serve hot,with additional salt and pepper if needed.</p>
        </ol>
      </div>

      {/*  Nutrition*/}
      <div>
        <h1>Nutrition</h1>
        <p>
          The table below nutritional values per serving without the additional
          fillings
        </p>
        <div className="flex border-b-2 gap-56">
          <p className="min-w-16">Calories</p>
          <p>277kcal</p>
        </div>
        <div className="flex border-b-2 gap-56">
          <p className="min-w-16">Carbs</p>
          <p>0g</p>
        </div>
        <div className="flex border-b-2 gap-56">
          <p className="min-w-16">Protein </p>
          <p>20g</p>
        </div>
        <div className="flex border-b-2 gap-56">
          <p className="min-w-16">Fat</p>
          <p>22g</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
