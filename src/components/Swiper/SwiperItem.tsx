import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { dbGame, IdbGame } from "data";
import { SwiperCard } from "components";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowDownRightCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./swiperItem.scss";

const SwiperItem = () => {
  const [sortedGame, setSortedGame] = useState<Array<IdbGame>>([]);
  const [swiperMove, setSwiperMove] = useState<any>({});

  const sortGameAccordingToPrice = () => {
    const games = dbGame.sort((a, b) => a.Price - b.Price);
    setSortedGame([...games]);
  };

  useEffect(() => {
    sortGameAccordingToPrice();
  }, []);

  return (
    <div className="swiper_container">
      <div className="arrow_container">
        <BsFillArrowLeftCircleFill
          onClick={() => {
            swiperMove?.slidePrev();
          }}
          size={30}
          className="arrow"
        />
        <BsFillArrowRightCircleFill
          onClick={() => {
            swiperMove?.slideNext();
          }}
          size={30}
          className="arrow"
        />
      </div>
      <div className="swiper_card_wrapper">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onInit={(ev) => {
            setSwiperMove(ev);
          }}
        >
          {sortedGame.map((el, i) => {
            return (
              <SwiperSlide key={String(i)}>
                <SwiperCard gameData={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperItem;
export { SwiperItem };
