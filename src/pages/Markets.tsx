import MainLayout from "components/MainLayout";
import React, { useEffect, useState } from "react";
import { dbGame } from "data";
import { Input, Menu, Dropdown, Space, Select } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import FilterMenu from "components/Markets/FilterMenu";
import { SwiperCard } from "components";
import GameCard from "components/Markets/GameCard";
const Markets = () => {
  const { Option } = Select;
  const categoriesArr: Array<any> = [];
  const [categories, setCategories] = useState<Array<string>>([]);
  const CategoryFilter = () => {
    dbGame.forEach((val, i) => {
      categoriesArr.push(...val.Categories.map((el) => el));
    });

    setCategories([...Array.from(new Set(categoriesArr))]);
  };
  useEffect(() => {
    CategoryFilter();
  }, []);
  return (
    <MainLayout>
      <div className="flex flex-col">
        <FilterMenu />
        <div className="w-full grid grid-cols-4 gap-6 ">
           {
            dbGame.map((el,i)=>{
                return (
                    <GameCard gameData={el}  />
                )
            })
           }

          {/*     <img src={dbGame[0].Cover} alt="" className="w-[250px]" />
                <img src={dbGame[0].Cover} alt="" className="w-[250px]" />
                <img src={dbGame[0].Cover} alt="" className="w-[250px]" /> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Markets;
