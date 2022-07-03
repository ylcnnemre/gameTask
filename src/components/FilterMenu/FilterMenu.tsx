import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {IdbGame } from "data";
import { Input, Menu, Dropdown, Space, Select } from "antd";
import { useContext } from "react";
import { Context, IContextType } from "App";
import "./filtermenu.scss"
import i18n from "i18next"
import { useTranslation } from "react-i18next";

const FilterMenu = ({ setGames, games }: {setGames:Function,games:Array<IdbGame>}) => {
 

  const {t} =useTranslation()

  const {allGames}:IContextType =useContext(Context) 

  const { Option } = Select;
  const [categories, setCategories] = useState<Array<string>>([]);
  const [tempGames, setTempGames] = useState<Array<IdbGame>>([]);
  const [AllTempGames, setAllTempGames] = useState<Array<IdbGame>>([]);
  const [queryName, setQueryName] = useState<string>("");
  const [sortedOption, setSortedOption] = useState<"Price" | "Like">();
  
  
  const CategoryFilter = () => {
    
    const categoriesArr: Array<any> = [];
    allGames.forEach((val, i) => {
      categoriesArr.push(...val.Categories.map((el) => el));
    });

    setCategories([...Array.from(new Set(categoriesArr))]);
  };

  const filterByName = (val: string) => {
    const filteredGames: any = tempGames.filter(
      (e: any, i: any) => e.Name.toLowerCase().search(val.toLowerCase()) != -1
    ); 
    console.log("filtered games => ",filteredGames)
    setGames([...filteredGames]);
  };

  const filterByCategorie = (categorie: Array<string>) => {
    if (categorie.length == 0) {
      setGames([...AllTempGames]);
      setTempGames([...AllTempGames])
    } else {
      const filteredGamesByCategorie = AllTempGames.filter((e, i) =>

           e.Categories.findIndex((item)=> categorie.includes(item))!==-1
      
      
      );
      setGames([...filteredGamesByCategorie])
      setTempGames([...filteredGamesByCategorie])
    }

    setQueryName("");

  };

 

 

  useEffect(() => {
    CategoryFilter();
    setTempGames([...games]);
    setAllTempGames([...games]);
  }, []);

   useEffect(()=>{
      
    if(sortedOption=="Price")
    {
        setGames([...tempGames.sort((a,b)=>a.Price - b.Price)])
    }
    else if(sortedOption=="Like")
    {
      setGames([...tempGames.sort((a,b)=>b.Likes - a.Likes)])
    }

},[tempGames,sortedOption])

  return (
    <div className="filter_menu_section">
      <div className="name_input_container">
        <AiOutlineSearch color="white" size={"20"} />
        <Input
          value={queryName}
          placeholder={t("search")}
          bordered={false}
          className="name_input"
          onChange={({ target: { value } }) => {
            filterByName(value);
            setQueryName(value);
          }}
        />
      </div>
      <div className="dropdown_container">
        <Select
          placeholder={t("sort")}
          className="sort_button"
          bordered={false}
          onChange={(e:any) => {
             setSortedOption(e);
          }}
        >
          <Option value={t("price")}>{t("price")}</Option>
          <Option value="Like">{t("like")}</Option>
        </Select>

        <Select
          mode="multiple"
          placeholder={t("categories")}
          className="category_button  "
          
          bordered={false}
          onChange={(e:any) => {
             console.log("mulp ==> ",e)
            filterByCategorie(e);
          }}
        >
          {categories.map((val, i) => {
            return (
              <Option key={String(i)} value={val}   >
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
