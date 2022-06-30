import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide ,useSwiper} from "swiper/react";
import "swiper/css";
import { dbGame, IdbGame } from "data";
import { SwiperCard } from "components";
import {BsFillArrowLeftCircleFill,BsFillArrowDownRightCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
const SwiperItem = () => {
  const [sortedGame, setSortedGame] = useState<Array<IdbGame>>([]);
  const [swiperMove, setSwiperMove] = useState<any>({});
  

    const sortGameAccordingToPrice=() =>{

        const games=dbGame.sort((a,b) =>  a.Price - b.Price )
        setSortedGame([
            ...games
        ]) 
    }

    useEffect(()=>{
        sortGameAccordingToPrice()
    },[]) 

  return (
    <div className="flex flex-col">
        <div className="flex bg-red w-full justify-end my-4">
             
             <BsFillArrowLeftCircleFill onClick={() =>{swiperMove?.slidePrev();} }   size={30} className="ml-2 hover:text-white text-header-link-color transition-all cursor-pointer"  />
             <BsFillArrowRightCircleFill onClick={() =>{swiperMove?.slideNext();} }  size={30} className="ml-2 hover:text-white text-header-link-color transition-all cursor-pointer " /> 
        </div>
      <div className="flex">
        <Swiper spaceBetween={20} slidesPerView={5} onInit={(ev) => {
            setSwiperMove(ev)
    }}> 
          {sortedGame.map((el, i) => {
            return (
              (
                <SwiperSlide key={String(i)}>
                  <SwiperCard gameData={el} />
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperItem;
export { SwiperItem };
