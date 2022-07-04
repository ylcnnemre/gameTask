import React from "react";
import { useTranslation } from "react-i18next";
import { BsPlusCircle } from "react-icons/bs";
import "./trendGameCard.scss";

const TrendGameCard = ({ movieData }: any) => {
  const { t } = useTranslation();

  return (
    <div className="game_card_container">
      <img src={movieData.Cover} alt="" className="game_card_img" />
      <div className="game_info_wrapper">
        <div className="infos">
          <p className="game_name">{movieData.Name}</p>

          <p className="game_price">{movieData.Price}$</p>
        </div>
        <div className="card_button_container">
          <button className="request_list">
            <BsPlusCircle size={"15"} />
            <span>{t("addrequest")}</span>
          </button>
          <button className="learn_more">
            <span>{t("learninfo")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendGameCard;
export { TrendGameCard };
