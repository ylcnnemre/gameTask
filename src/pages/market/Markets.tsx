import MainLayout from "Layouts/MainLayout";
import React, { useContext, useEffect, useState } from "react";
import { dbGame, IdbGame } from "data";
import {Select } from "antd";
import FilterMenu from "components/FilterMenu/FilterMenu";

import GameCard from "components/GameCard/GameCard";
import { Context, IContextType } from "App";
import "./market.scss"



const Markets = () => {
  const {allGames,auth,myLibrary,setAllGames} : IContextType  =useContext(Context)
  const [games,setGames]=useState<Array<IdbGame>>()
  

  useEffect(()=>{

     setGames([
      ...allGames
    ])
     
  },[myLibrary])


  useEffect(()=>{
      if(!auth)
      {
        
      setGames([
        ...dbGame.map((el, i) => {
          return {
            ...el,
            exist: false,
          };
        }),
      ]);
      }

  },[auth])

/*   useEffect(()=>{

    const baseLibrary=allGames.filter((val,i)=> myLibrary.filter(el => el.Id === val.Id ).length > 0 )
     console.log("base libraryy ==> ",baseLibrary)
    localStorage.setItem("library", JSON.stringify(baseLibrary));
  },[])
 */
  

  return (
    <MainLayout>
      <div className="markets_section">
        { games != undefined  &&  <FilterMenu  setGames={setGames}  games={games} />    }
        <div className="markets_section_container">
           {
               games?.map((el,i)=>{
              return (
                  <GameCard gameData={el} key={String(i)}  />
              )
          }) 
            
           }
        </div>
      </div>
    </MainLayout>
  );
};

export default Markets;
