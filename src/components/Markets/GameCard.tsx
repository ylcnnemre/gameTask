import React from "react";
import {FaHeart} from "react-icons/fa"
const GameCard = ({ gameData }: any) => {
  return (
    <div className="flex flex-col bg-header-bg p-3 rounded-lg">
      <div className="flex">
        <p className="text-white font-bold text-ellipsis whitespace-nowrap overflow-hidden mb-2">
          {gameData.Name}
        </p>
      </div>

      <img src={gameData.Cover} alt="" className="w-full rounded-lg" />

    {/*   <p className="text-white text-sm  line-clamp">{gameData.Summary}</p> */}
      <div className="flex w-full justify-between items-center mt-3">
         <p className="bg-slate-700 px-2 py-2 rounded-md text-white">
            01/02/18
         </p>
         <p className="flex items-center text-xl text-white">
            <FaHeart className="mr-1 text-red-600 text-md"  />
            {gameData.Likes}
         </p>
         <p className="bg-slate-700 px-3 py-2 rounded-md text-white">
            {
                gameData.Price
            }$
         </p>
      </div>
    </div>
  );
};

export default GameCard;
