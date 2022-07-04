
import { Context,IContextType } from "App";
import { ConfirmDialog,GalleryModal } from "components";
import { dbGame, IdbGame } from "data";
import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./gamecard.scss";
import { useTranslation } from "react-i18next";


const GameCard = ({
  gameData,
  children,
}: {
  gameData: IdbGame;
  children?: any;
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { auth, myLibrary, setMyLibrary, setAllGames, allGames }: IContextType =
    useContext(Context);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [galleryModalVisible, setGalleryModalVisible] =
    useState<boolean>(false);

  const addMyLibrary = (): void => {
    setMyLibrary([
      ...myLibrary,
      {
        ...gameData,
        exist: true,
      },
    ]);

    setAllGames([
      ...allGames.map((el, i) => {
        if (el.Id === gameData.Id) {
          return {
            ...el,
            exist: true,
          };
        } else {
          return {
            ...el,
          };
        }
      }),
    ]);
  };

  useEffect(() => {
    const newStorage = myLibrary.map((val, i) => {
      if (dbGame.find((e) => e.Id == val.Id)?.Likes !== val.Likes) {
        return {
          ...val,
          Likes: val.Likes - 1,
        };
      } else {
        return {
          ...val,
        };
      }
    });
    console.log("new storage ==>", newStorage);
    localStorage.setItem("library", JSON.stringify(newStorage));
  }, []);

  return (
    <>
      <div className="gamecard_section">
        <div className="card_name_wrapper">
          <p className="card_name">{gameData.Name}</p>
        </div>

        <div
          className="card_img_wrapper"
          onClick={() => setGalleryModalVisible(true)}
        >
          <img src={gameData.Cover} alt="" className="card_img " />
          <BiSearch className="search_icon" />
        </div>

        <p className="card_description line-clamp ">{gameData.Summary}</p>
        <div className="card_info_container">
          <p className="date_box">
            {new Date(gameData.ReleaseDate)
              .toISOString()
              .split("T")[0]
              .split("-")
              .join("/")}
          </p>
          <p className="likes">
            <FaHeart className="heart" />
            {gameData.Likes}
          </p>
          <p className="price">{gameData.Price}$</p>
        </div>

        <div className="buy_button_container">
          {!gameData.exist ? (
            <button
              className="buy_button "
              onClick={() => {
                auth ? setIsModalVisible(true) : navigate("/login");
              }}
            >
              {t("buy")}
            </button>
          ) : (
            <button className="exist_button">{t("avalaible")}</button>
          )}
          {children}
        </div>

        <ConfirmDialog
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          confirmFunction={addMyLibrary}
        />
      </div>

      <GalleryModal
        isModalVisible={galleryModalVisible}
        setIsModalVisible={setGalleryModalVisible}
        images={gameData.Screenshots}
      />
    </>
  );
};

export default GameCard;
export {
  GameCard
}