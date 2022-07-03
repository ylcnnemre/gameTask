
import { Header, NavMenu, Trends, DiscountGames } from "components";
import MainLayout from "../Layouts/MainLayout";

const Home = () => {

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
