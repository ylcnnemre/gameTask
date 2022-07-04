import React from "react";
import "./swiperCard.scss";
const SwiperCard = ({ gameData }: any) => {
  return (
    <div className="swiper_card">
      <img src={gameData.Cover} width="100%" alt="" />
      <p className="card_name">{gameData.Name}</p>
      <div className="info_container">
        <p className="discount">-50%</p>
        <p className="old_price">{(gameData.Price * 100) / (100 - 50)}$</p>
        <p className="new_price">{gameData.Price}$</p>
      </div>
    </div>
  );
};

export default SwiperCard;
export { SwiperCard };
