import MainLayout from "components/MainLayout";
import React, { useEffect, useState } from "react";
import { dbGame, IdbGame } from "data";
import { Input, Menu, Dropdown, Space, Select } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import FilterMenu from "components/Markets/FilterMenu";
import { SwiperCard } from "components";
import GameCard from "components/Markets/GameCard";
const Markets = () => {
  const { Option } = Select;
  const [games,setGames]=useState<Array<IdbGame>>([...dbGame])

  return (
    <MainLayout>
      <div className="flex flex-col">
        <FilterMenu  setGames={setGames}  games={games} />
        <div className="w-full grid grid-cols-4 gap-6 ">
           {
            games.map((el,i)=>{
                return (
                    <GameCard gameData={el}  />
                )
            })
           }
        </div>
      </div>
    </MainLayout>
  );
};

export default Markets;
