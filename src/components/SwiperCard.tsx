import React from 'react'

const SwiperCard = ({gameData}:any) => {
  return (
    <div className="flex flex-col overflow-hidden ">
    <img src={gameData.Cover} width="100%" alt="" />
    <p className="text-white text-ellipsis overflow-hidden whitespace-nowrap my-2 font-semibold">
      {gameData.Name}
    </p>
    <div className="flex items-center ">
      <p className="text-white bg-header-link-after-color px-2 rounded-md">
        -50%
      </p>
      <p className="text-white line-through mx-3">
        {(gameData.Price * 100) / (100 - 50)}$
      </p>
      <p className="text-white font-semibold">{gameData.Price}$</p>
    </div>
  </div>
  )
}

export default SwiperCard
export {
    SwiperCard
}