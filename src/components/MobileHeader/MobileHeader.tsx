import { Button } from "antd";
import { Context, IContextType } from "App";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./mobileHeader.scss";
import { ImUser } from "react-icons/im";
import { useTranslation } from "react-i18next";

const MobileHeader = ({mobileHeaderShow,setMobileHeaderShow}:{mobileHeaderShow:boolean,setMobileHeaderShow:Function}) => {
  const { auth , setAuth}: IContextType = useContext(Context);
  const{t} =useTranslation()

    const logout=()=>{
        setAuth(false)
        localStorage.removeItem("auth")
        setMobileHeaderShow(false)
    }   
    
  return (
    <div className="mobil_header_container" style={mobileHeaderShow ? {left:"0"} : {left:"-100%"} } >
      <div className="header_link_list">
        <Link to={"/market"} className="link">
            {
                t("market")
            }
        </Link>
        <Link to={"/library"} className="link">
                {
                    t("library")
                }
        </Link>

        {!auth ? (
          <div className="header_button_wrapper">
            <Link to={"/login"} className="mobile_login_button"   onClick={()=>setMobileHeaderShow(false)}  >
              <ImUser size={"20"} />
              <span className="login_button_span">
                    {t("login")}
              </span>
            </Link>
            <Link to={"/register"} className="mobile_register_button"  onClick={()=>setMobileHeaderShow(false)}>
              <span className="register_button_span">
                {
                    t("register")
                }
              </span>
            </Link>
          </div>
        ) : <button  className="mobile_logout_button"  onClick={()=>logout()}>
        <span className="register_logout_span">
             {t("logout")}
        </span>
      </button>
            
        
        }
      </div>
    </div>
  );
};

export default MobileHeader;
export { MobileHeader };
