import React, { createContext, useState, FC, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { dbGame, IdbGame,translationEn,translationTr} from "data";
import {Home,Library,Login,Markets,Register} from "pages"
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";
import "./styles/App.scss"
import { LoadingOutlined } from "@ant-design/icons";
import {initReactI18next,useTranslation} from "react-i18next"
import i18n from "i18next"




export interface IContextType {
  allGames: Array<IdbGame>;
  setAllGames: Function;
  myLibrary: Array<IdbGame>;
  setMyLibrary: Function;
  auth: boolean;
  setAuth: Function;
  favoriteGames: Array<IdbGame>;
  setFavoriteGames: Function;
  selectedLanguage: string;
  setSelectedLanguage  : Function;
}


const lang : any=localStorage.getItem("language") == null ? "en" : localStorage.getItem("language")

i18n.use(initReactI18next).init({
  resources : {
    en : {translation:translationEn},
    tr:  {translation : translationTr}
  },
  lng : lang,
  fallbackLng : lang,
  interpolation : {escapeValue : false}
})





export const Context: any = createContext("");

const App: FC = () => {

  const [allGames, setAllGames] = useState<Array<IdbGame>>();
  const [myLibrary, setMyLibrary] = useState<Array<IdbGame>>([]);
  const [favoriteGames, setFavoriteGames] = useState<Array<IdbGame>>([]);
  const [auth, setAuth] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>();

  useEffect(() => {
    let storageAuth: any = localStorage.getItem("auth");
    let storageLibrary: any = localStorage.getItem("library");

    if (storageAuth) {
      setAuth(true);
    }
    if (storageLibrary) {
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

  }, []);


  if (allGames == null) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <Spin indicator={antIcon} />;
  }

  return (
    <Context.Provider
      value={{
        allGames,
        setAllGames,
        auth,
        setAuth,
        myLibrary,
        setMyLibrary,
        favoriteGames,
        setFavoriteGames,
        selectedLanguage,
        setSelectedLanguage
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Markets />} />
          <Route
            path="/login"
            element={auth ? <Navigate to={"/library"} replace /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/library"
            element={<Library />}
          />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
