import { Context } from "App";
import MainLayout from "components/MainLayout";
import React, { useCallback, useContext, useEffect } from "react";
import { IContextType } from "App";
import FilterMenu from "components/FilterMenu/FilterMenu";
import GameCard from "components/GameCard/GameCard";
import { TbHeartPlus } from "react-icons/tb";
import { IdbGame } from "data";
import { FaHeart } from "react-icons/fa";
import "./library.scss";
import { Link } from "react-router-dom";

const Library = () => {
  const {
    myLibrary,
    setMyLibrary,
    allGames,
    setAllGames,
    favoriteGames,
    setFavoriteGames,
  }: IContextType = useContext(Context);


  const increaseLikeCount = (selectedGame: IdbGame) => {
  /*   if (localStorage.getItem("favorite")) {
      let StorageFavorite: any = localStorage.getItem("favorite");
      StorageFavorite = JSON.parse(StorageFavorite);

      let newStorageFavorite = [...StorageFavorite, selectedGame];

      localStorage.setItem("favorite", JSON.stringify(newStorageFavorite));
    } else {
      localStorage.setItem("favorite", JSON.stringify([selectedGame]));
    } */

    /*  localStorage.setItem("favorite",JSON.stringify(favoriteGames)) */
   
    setFavoriteGames([...favoriteGames, selectedGame]);

    setAllGames([
      ...allGames.map((el, i) => {
        if (el.Id === selectedGame.Id) {
          return {
            ...el,
            Likes: el.Likes + 1,
          };
        } else {
          return {
            ...el,
          };
        }
      }),
    ]);

    setMyLibrary([
      ...myLibrary.map((el, i) => {
        if (el.Id === selectedGame.Id) {
          return {
            ...el,
            Likes: el.Likes + 1,
          };
        } else {
          return {
            ...el,
          };
        }
      }),
    ]);

    /*   localStorage.setItem("favorite",JSON.stringify(favoriteGames))  */
  };

  const unLike = (selectedGame: IdbGame) => {
    setAllGames([
      ...allGames.map((el, i) => {
        if (el.Id === selectedGame.Id) {
          return {
            ...el,
            Likes: el.Likes - 1,
          };
        } else {
          return {
            ...el,
          };
        }
      }),
    ]);
    setMyLibrary([
      ...myLibrary.map((el, i) => {
        if (el.Id === selectedGame.Id) {
          return {
            ...el,
            Likes: el.Likes - 1,
          };
        } else {
          return {
            ...el,
          };
        }
      }),
    ]);

     setFavoriteGames([
      ...favoriteGames.filter((el, i) => el.Id !== selectedGame.Id),
    ]);
  /*   localStorage.setItem(
      "favorite",
      JSON.stringify([
        ...favoriteGames.filter((el, i) => el.Id !== selectedGame.Id),
      ])
    ); */
  };

 

  return (
    <MainLayout>
      <div className="library_container">
        <FilterMenu setGames={setMyLibrary} games={myLibrary} />
        <div className="library_wrapper">
          {myLibrary.length === 0 ? (
            <p className="empty_content">Listenizde oyun yok
               <Link to={"/market"} className="buy_link">
                   Satın Al
               </Link>
            </p>
          ) : (
            myLibrary?.map((el, i) => {
              return (
                <GameCard gameData={el}>
                  {favoriteGames.filter((e) => e.Id === el.Id).length > 0 ? (
                    <FaHeart
                      onClick={() => unLike(el)}
                      className="heart"
                      size={25}
                    />
                  ) : (
                    <TbHeartPlus
                      size={25}
                      className="heart_plus"
                      onClick={() => increaseLikeCount(el)}
                    />
                  )}
                </GameCard>
              );
            })
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Library;
