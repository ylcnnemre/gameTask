import React from "react";
import { BsPlusCircle } from "react-icons/bs";


const TrendGameCard = ({movieData}:any) => {
  return (
    <div className="w-full h-[200px] flex bg-header-bg rounded-3xl my-5">
      <img
        src={movieData.Cover}
        alt=""
        className="h-full object-contain rounded-3xl"
      />
      <div className="w-full 0  flex flex-col p-3 justify-between  ">
        <div className="w-full flex justify-between items-center">
          <p className="text-white bg-slate-600 text-xl px-4 rounded-lg">
            {movieData.Name}
          </p>

          <p className="text-white bg-slate-700 px-5 text-xl  rounded-xl ">
            {movieData.Price}$
          </p>
        </div>
        <div className="w-full flex justify-between items-center">
          <button className=" text-white flex items-center p-3 text-black bg-white rounded-lg hover:bg-black hover:text-white transition-all">
            <BsPlusCircle size={"15"} />
            <span className="ml-2 font-semibold">İstek Listesine Ekle</span>
          </button>
          <button className=" text-white flex items-center p-3 text-black bg-white rounded-lg hover:bg-black hover:text-white transition-all">
            {/*    <BsPlusCircle size={"15"} />   */}
            <span className="ml-2 font-semibold">Daha Fazla Bilgi al</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendGameCard;
export {
   TrendGameCard
}