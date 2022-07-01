import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { dbGame, IdbGame } from "data";
import { Input, Menu, Dropdown, Space, Select } from "antd";
const FilterMenu = ({ setGames, games }: any) => {
  const { Option } = Select;

  const [categories, setCategories] = useState<Array<string>>([]);
  const [tempGames, setTempGames] = useState<Array<IdbGame>>([]);
  const [AllTempGames, setAllTempGames] = useState<Array<IdbGame>>([]);
  const [queryName, setQueryName] = useState<string>("");

  const CategoryFilter = () => {
    const categoriesArr: Array<any> = [];
    dbGame.forEach((val, i) => {
      categoriesArr.push(...val.Categories.map((el) => el));
    });

    setCategories([...Array.from(new Set(categoriesArr))]);
  };

  const filterByName = (val: string) => {
    const filteredGames: any = tempGames.filter(
      (e: any, i: any) => e.Name.toLowerCase().search(val.toLowerCase()) != -1
    );
    setGames([...filteredGames]);
  };

  const filterByCategorie = (categorie: string) => {
    if (categorie == "All") {
      setGames([...AllTempGames]);
    } else {
      const filteredGamesByCategorie = AllTempGames.filter((e: any, i: any) =>
        e.Categories.includes(categorie)
      );
      setGames([...filteredGamesByCategorie]);
      setTempGames([...filteredGamesByCategorie]);
    }

    setQueryName("");
  };

  
  const sortedByOptions=(val: string) =>{
     const sortedGames : any= AllTempGames.sort((a,b) => a.Price - b.Price)
    
     setGames([
        ...sortedGames
     ])
    
  }


  useEffect(() => {
    CategoryFilter();
    setTempGames([...games]);
    setAllTempGames([...games]);
  }, []);
  return (
    <div className="flex items-center justify-between">
      <div className="text-white bg-header-bg w-[200px] flex items-center rounded-3xl px-4 ">
        <AiOutlineSearch color="white" size={"20"} />
        <Input
          value={queryName}
          placeholder="search"
          bordered={false}
          className="py-2 text-white"
          onChange={({ target: { value } }) => {
            filterByName(value);
            setQueryName(value);
          }}
        />
      </div>
      <div>
         <Select  placeholder="Sort" className="w-[150px] text-black  rounded-3xl bg-white" bordered={false}  onChange={(e)=>sortedByOptions(e)}>
              <Option value="Price">
                       Price
              </Option>
              <Option value="Like">
                  Like
              </Option>
         </Select>

        <Select
          defaultValue={"All"}
          className="w-[150px] text-black  rounded-3xl bg-white  ml-4  "
          bordered={false}
          onChange={(e) => {
            filterByCategorie(e);
          }}
        >
          <Option value="All"> All</Option>
          {categories.map((val, i) => {
            return (
              <Option key={String(i)} value={val}>
                {val}
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default FilterMenu;
