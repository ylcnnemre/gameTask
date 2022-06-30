import MainLayout from "components/MainLayout";
import React, { useEffect, useState } from "react";
import { dbGame } from "data";
import { Input, Menu, Dropdown, Space, Select } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import FilterMenu from "components/Markets/FilterMenu";
const Markets = () => {
  const { Option } = Select;
  const categoriesArr : Array<any> =[]
  const [categories,setCategories]=useState<Array<string>>([])
  const CategoryFilter=()=>{
    
     dbGame.forEach((val,i) =>{
        categoriesArr.push(...val.Categories.map(el => el))
     })

     setCategories([
        ...Array.from(new Set(categoriesArr))
     ])
  }
  useEffect(()=>{
    CategoryFilter()
  },[])
  return (
    <MainLayout>
      <div className="flex flex-col">
            <FilterMenu />
      </div>
    </MainLayout>
  );
};

export default Markets;
