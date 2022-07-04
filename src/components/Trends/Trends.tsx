import React, { useEffect, useState } from "react";

import { dbGame, IdbGame } from "data";
import { TrendGameCard } from "components";
import "./trends.scss";

const Trends = () => {
  const [trendGames, setTrendGames] = useState<Array<IdbGame>>([]);

  const sortedMovie = () => {
    const games = dbGame.sort((a, b) => b.Likes - a.Likes);

    setTrendGames([...games]);
  };

  useEffect(() => {
    sortedMovie();
  });
  return (
    <section className="trends_container">
      <div className="game_card_wrapper">
        {trendGames.map((el, i) => {
          return i < 3 && <TrendGameCard movieData={el} />;
        })}
      </div>
      <div className="game_cards_infos ">
        <div className="info_wrapper">
          {dbGame.map((item, i) => {
            return (
              i < 5 && (
                <div className="image_container">
                  <img src={item.Cover} alt="gameimg" />
                  <span>{item.Name}</span>
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trends;

export { Trends };
