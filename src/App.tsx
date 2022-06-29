import React, {createContext,useState ,FC} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home  } from "components";
import {langs,TlangProps} from "data"


export const Context: any = createContext("");

const App : FC = () => {
  const [lang,setLang]=useState<TlangProps>(langs.tr)
  const [selectedLanguage,setSelectedLanguage]=useState<string>("tr")

  const switchLang=() =>{
    setSelectedLanguage(selectedLanguage==="tr" ? "en" : "tr")
    lang === langs.tr ? setLang(langs.en) : setLang(langs.tr)
  }


  return (
    <Context.Provider value={lang}  >
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>Lorem ipsum dolor sit amet.</p>} />
        </Routes>
      </Router> 
    </Context.Provider>
  );
};

export default App;
