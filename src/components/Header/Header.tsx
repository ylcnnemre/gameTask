import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import { ImUser } from "react-icons/im";
import { Context, IContextType } from "App";
import { useTranslation } from 'react-i18next'
import i18n from "i18next"
import "./header.scss"
import { AiOutlineBars } from "react-icons/ai";





const Header = () => {
  const {t} =useTranslation()

  const navigate=useNavigate()


const headerLinks: Array<{ name: any; path: string }> = [
  {
    name: t("market"),
    path: "/market",
  },
  {
    name: t("library"),
    path: "/library",
  },
];




  const { auth,setAuth,setAllGames ,selectedLanguage,setSelectedLanguage}: IContextType = useContext(Context);
  const  {pathname}= useLocation()



  const logOut=()=>{

      setAuth(false)
      localStorage.removeItem("auth")

  }



  const setLangueage=(lang:string)=>{

      i18n.changeLanguage(lang)

      setSelectedLanguage(lang)

      localStorage.setItem("language",lang)
  }




  const menu = (
    <Menu style={{padding:"0 10px"}}
      onClick={({key})=>{setLangueage(key) } }
      items={[
        {
          label: "En",
          key: "en",
        },
        {
          label: "Tr",
          key: "tr",
        }
      ]}
    />
  );



  useEffect(()=>{
    const lang:any=localStorage.getItem("language")==null ? "en" : localStorage.getItem("language")
    setSelectedLanguage(lang)
  },[])




  return (
    <header className="header">
      <div className="header_link_container">
        <h1 className="logo" onClick={()=>navigate("/")}  >PTGAMES</h1>
        <ul className="header_links_wrapper">
          {headerLinks.map((item, i) => {
            return (
              <li key={String(i)} className="header_link_item">
                <Link
                  to={item.path}
                  className={`header_link_item_1 ${pathname===item.path && "text-blue-600" } `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header_button_menu">
        <div className="dropdown_container">
          <Dropdown
            overlay={menu}
            className="dropdown"
            placement="bottomCenter"
            
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="dropdown_link"
            >
              <BiWorld size={"25"} /> <span>{selectedLanguage}</span>
            </a>
          </Dropdown>
           
          <AiOutlineBars   className="bars_icon" />
        </div>

        {auth ? (
           <Link
           to={""}
           className="logout_button"
           onClick={()=>logOut()}
         >

           {t("logout")}
         </Link>
        ) : (
          <div className="buttons_container">
            <Link
              to={"/login"}
              className="login_button"
            >
              <ImUser size={"20"} />
              <span className="login_button_span">{t("login")}</span>
            </Link>
            <Link
              to={"/register"}
              className="register_button"
            >
              {t("register")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
export { Header };
