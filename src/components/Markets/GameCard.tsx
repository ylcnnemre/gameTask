import { Button } from "antd";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
const GameCard = ({ gameData ,games }: any) => {


  return (
    <div className="flex flex-col bg-header-bg p-3 rounded-lg">
      <div className="flex">
        <p className="text-white font-bold text-ellipsis whitespace-nowrap overflow-hidden mb-2">
          {gameData.Name}
        </p>
      </div>

      <div className="relative hover:opacity-80 transition-all group">
        <img
          src={gameData.Cover}
          alt=""
          className="w-full rounded-lg relative  "
        />
        <BiSearch className=" cursor-pointer absolute top-1/2 left-1/2 text-white  text-3xl opacity-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-95 transition-all" />
      </div>

      <p className="text-white text-sm flex-1   line-clamp my-2">{gameData.Summary}</p>
      <div className="flex   w-full justify-between items-end mt-3">
        <p className="bg-slate-700 px-2 py-2 rounded-md text-white text-sm  ">
            { new Date(gameData.ReleaseDate).toISOString().split("T")[0].split("-").join("/") }
        </p>
        <p className="flex items-center text-xl text-white h-full  justify-center">
          <FaHeart className="mr-2 text-red-600 text-md" />
          {gameData.Likes}
        </p>
        <p className="bg-slate-700 px-3 py-2 rounded-md text-white">
          {gameData.Price}$
        </p>
      </div>
      <Button className="rounded-lg text-white mt-4">
        Satın al
      </Button>
    </div>
  );
};

export default GameCard;
