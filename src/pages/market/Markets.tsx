import MainLayout from "Layouts/MainLayout";
import React, { useContext, useEffect, useState } from "react";
import { dbGame, IdbGame } from "data";
import {FilterMenu,GameCard} from "components"
import { Context, IContextType } from "App";
import "./market.scss";

const Markets = () => {
  const { allGames, auth, myLibrary, setAllGames }: IContextType =
    useContext(Context);
  const [games, setGames] = useState<Array<IdbGame>>();

  useEffect(() => {
    setGames([...allGames]);
  }, [myLibrary]);

  useEffect(() => {
    if (!auth) {
      setGames([
        ...dbGame.map((el, i) => {
          return {
            ...el,
            exist: false,
          };
        }),
      ]);
    }
  }, [auth]);

  return (
    <MainLayout>
      <div className="markets_section">
        {games != undefined && <FilterMenu setGames={setGames} games={games} />}
        <div className="markets_section_container">
          {games?.map((el, i) => {
            return <GameCard gameData={el} key={String(i)} />;
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Markets;
export { Markets };
