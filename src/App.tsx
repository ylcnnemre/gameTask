import React, {createContext,useState ,FC} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { Home  } from "components";
import {langs,TlangProps} from "data"
import Markets from "pages/Markets";
import Login from "pages/Login";
import 'react-toastify/dist/ReactToastify.css';
import Register from "pages/Register";
import Test from "pages/Test";

export const Context: any = createContext("");

const App : FC = () => {
  const [lang,setLang]=useState<TlangProps>(langs.tr)
  const [selectedLanguage,setSelectedLanguage]=useState<string>("tr")

  const [auth,setAauth]=useState<boolean>(false)



  const switchLang=() =>{
    setSelectedLanguage(selectedLanguage==="tr" ? "en" : "tr")
    lang === langs.tr ? setLang(langs.en) : setLang(langs.tr)
  }
  

  return (
    <Context.Provider value={[lang,auth,setAauth]}  >
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets/>} /> 
          <Route path="/login" element={auth ? <Navigate to={"/markets"} replace /> : <Login />   }  />
          <Route path="/register"  element={<Register/>}  />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router> 
    </Context.Provider>
  );
};

export default App;
