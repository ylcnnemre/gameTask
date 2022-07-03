import { Context } from "App";
import MainLayout from "Layouts/MainLayout";
import React, { useCallback, useContext, useEffect } from "react";
import { IContextType } from "App";
import FilterMenu from "components/FilterMenu/FilterMenu";
import GameCard from "components/GameCard/GameCard";
import { TbHeartPlus } from "react-icons/tb";
import { IdbGame } from "data";
import { FaHeart } from "react-icons/fa";
import "./library.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Library = () => {

  const {t} =useTranslation()

  const {
    myLibrary,
    setMyLibrary,
    allGames,
    setAllGames,
    favoriteGames,
    setFavoriteGames,
    auth
  }: IContextType = useContext(Context);


  const increaseLikeCount = (selectedGame: IdbGame) => {
   
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

  };

 const getComponent=useCallback(()=>{

      if(!auth)
      {
        return (
          <p className="not_auth">
           
              {t("notlogin")}
             <Link to={"/login"} className="login_btn">
                  {t("login")}
             </Link>
          </p>
          
        )
      }

     if(myLibrary.length===0)
      {
        return (
          <p className="empty_content">Listenizde oyun yok
          <Link to={"/market"} className="buy_link">
              Satın Al
          </Link>
       </p>
        )
      }
      else{
        return  myLibrary?.map((el, i) => {
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
      }

 },[myLibrary,auth])

  return (
    <MainLayout>
      <div className="library_container">
        <FilterMenu setGames={setMyLibrary} games={myLibrary} />
        <div className="library_wrapper">{
            getComponent()
          }
        </div>
      </div>
    </MainLayout>
  );
};

export default Library;
