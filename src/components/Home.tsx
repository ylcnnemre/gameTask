import { useState, useContext } from "react";
import { langs } from "data";
import { Context } from "App";
import { AiOutlineSearch } from "react-icons/ai";
import { Header, NavMenu, Trends, DiscountGames } from "components";
import MainLayout from "./MainLayout";

const Home = () => {
  const ContextData = useContext(Context);

  return (
    <MainLayout>
      <NavMenu />
      <Trends />
      <DiscountGames />
    </MainLayout>
  );
};

export default Home;
export { Home };
