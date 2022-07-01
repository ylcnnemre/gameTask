import React,{useState,useEffect} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { dbGame, IdbGame } from 'data';
import { Input, Menu, Dropdown, Space, Select } from "antd";
const FilterMenu = ({setGames,games}:any) => {
  
  const { Option } = Select;
  const categoriesArr : Array<any> =[]
  const [categories,setCategories]=useState<Array<string>>([])
  const [tempGames,setTempGames]=useState<Array<any>>([])
  const CategoryFilter=()=>{
    
     dbGame.forEach((val,i) =>{
        categoriesArr.push(...val.Categories.map(el => el))
     })

     setCategories([
        ...Array.from(new Set(categoriesArr))
     ])
  }


 const filterByName=(val:string) =>{
   const filteredGames:any=tempGames.filter((e:any,i:number)=>e.Name.toLowerCase().search(val.toLowerCase())!=-1 )

   setGames([...filteredGames])
 }      




  useEffect(()=>{
    console.log("games => ",games)
    CategoryFilter()
    setTempGames([
        ...games
    ])
 
  },[])
  return (
    <div className="flex items-center justify-between">
          <div className="text-white bg-header-bg w-[200px] flex items-center rounded-3xl px-4 ">
            <AiOutlineSearch color="white" size={"20"} />
            <Input
              placeholder="search"
              bordered={false}
              className="py-2 text-white"
              onChange={({target:{value}}) => filterByName(value)}
            />
          </div>
          <Select defaultValue={"all"} className="w-[150px] text-black  rounded-3xl bg-white  " bordered={false}  >
             <Option value="all"> All</Option>
            {
                categories.map((val,i)=>{
                    return (
                        <Option key={String(i)} value={val}   >
                                {
                                    val
                                }
                        </Option>
                    )
                })
            }
          </Select>
        </div>
  )
}

export default FilterMenu