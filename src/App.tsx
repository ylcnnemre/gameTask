import React, { createContext, useState, FC, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "components";
import { dbGame, IdbGame, langs, TlangProps } from "data";
import Markets from "pages/market/Markets";
import Login from "pages/login/Login";
import "react-toastify/dist/ReactToastify.css";
import Register from "pages/register/Register";
import Test from "pages/Test";
import Library from "pages/library/Library";
import { Spin } from "antd";
import "./styles/App.scss"

import { LoadingOutlined } from "@ant-design/icons";

export interface IContextType {
  lang: TlangProps;
  allGames: Array<IdbGame>;
  setAllGames: Function;
  myLibrary: Array<IdbGame>;
  setMyLibrary: Function;
  auth: boolean;
  setAuth: Function;
  favoriteGames: Array<IdbGame>;
  setFavoriteGames: Function;
}

export const Context: any = createContext("");

const App: FC = () => {
  const [lang, setLang] = useState<TlangProps>(langs.tr);
  const [allGames, setAllGames] = useState<Array<IdbGame>>();
  const [myLibrary, setMyLibrary] = useState<Array<IdbGame>>([]);
  const [favoriteGames, setFavoriteGames] = useState<Array<IdbGame>>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("tr");
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    let storageAuth: any = localStorage.getItem("auth");
    let storageLibrary: any = localStorage.getItem("library");
/*     let storageFavorite:any = localStorage.getItem("favorite") */

    if (storageAuth) {
      setAuth(true);
    }
    if (storageLibrary && storageAuth) {
      storageLibrary = JSON.parse(storageLibrary);
      console.log("storageLibrary ===> ", storageLibrary);
      setMyLibrary([...storageLibrary]);
      
      setAllGames([
            ...dbGame.map((el,i)=>{
                  
                  if(storageLibrary.filter((e:any) => e.Id === el.Id).length > 0)
                  {
                     return {
                         ...el,
                          exist : true
                     }
                  }
                  else{
                     return {
                       ...el
                     }
                  }

            })
      ])
    
    
    }
     else {
      setAllGames([
        ...dbGame.map((el, i) => {
          return {
            ...el,
            exist: false,
          };
        }),
      ]);
    }

  /*  if(storageFavorite)
   {
     storageFavorite = JSON.parse(storageFavorite)
    setFavoriteGames([...storageFavorite])
   } */

  }, []);

  const switchLang = () => {
    setSelectedLanguage(selectedLanguage === "tr" ? "en" : "tr");
    lang === langs.tr ? setLang(langs.en) : setLang(langs.tr);
  };

  if (allGames == null) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <Spin indicator={antIcon} />;
  }

  return (
    <Context.Provider
      value={{
        lang,
        allGames,
        setAllGames,
        auth,
        setAuth,
        myLibrary,
        setMyLibrary,
        favoriteGames,
        setFavoriteGames,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Markets />} />
          <Route
            path="/login"
            element={auth ? <Navigate to={"/market"} replace /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/library"
            element={!auth ? <Navigate to={"/market"} replace /> : <Library />}
          />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
