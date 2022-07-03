import { Button, Input } from "antd";
import React, { useContext, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import { Context, IContextType } from "App";
import "./Login.scss"
import { useTranslation } from "react-i18next";


const Login = () => {

  const {t} =useTranslation()
  const {auth,setAuth}: IContextType = useContext(Context)
  
  const [passwordInputType,setPasswordInputType]=useState<"text"|"password">("password")

  const [loginValidation, setLoginValidation] = useState<{
    email: boolean;
    password: boolean;
  }>({ email: false, password: false });

  const [loginInfo, setLoginInfo] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const setEmail = (mail: string): void => {
    var re = /\S+@\S+\.\S+/;

    if (re.test(mail) ) {
      setLoginInfo({
        ...loginInfo,
        email: mail,
      });
      setLoginValidation({
        ...loginValidation,
        email: true,
      });
    } else {
      setLoginInfo({
        ...loginInfo,
        email: "",
      });
      setLoginValidation({
        ...loginValidation,
        email: false,
      });
    }
  };

  const setPassword = (password: string): void => {
    setLoginInfo({
        ...loginInfo,
        password : password
    })
    if(password!=="")
    {
        setLoginValidation({
            ...loginValidation,
            password: true,
          });
         
    }
    else{
        setLoginValidation({
            ...loginValidation,
            password: false,
          });
    }
  };


 const confirmLogin=() :void =>{

    let userData : any= localStorage.getItem("user")
    console.log("user data )> ",userData)
    if(userData!==null)
    {
         const StorageLoginInfo : {email:string,password:string}  =JSON.parse(userData)  
         
         if(loginInfo.email==StorageLoginInfo.email && loginInfo.password==StorageLoginInfo.password)
         {
            setAuth(true)
            localStorage.setItem("auth",JSON.stringify(true))
         }
         else{
            toast.error("Wrong passwoord or email")
         }
    }
    else {
        toast.error("Wrong passwoord or email")
    }

 }



  return (
    <section className="login">
      <div className="login_container">
        <div className="login_wrapper">
          <h1 className="login_wrapper_logo">
            PT
          </h1>
          <h2 className="title">
            {t( "signmessage" )}
          </h2>
          <div className="email_input_container">
            <p className="email_input_title">{t("email")}</p>
            <Input
              placeholder="root@gmail.com"
              className="email_input"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div className="password_input_container">
            <p className="password_input-title">{t("password")}</p>

            <div className="input_wrapper" >
              <Input
                onChange={({ target: { value } }) => setPassword(value)}
                type={passwordInputType}
                bordered={false}
                placeholder="1234"
              />
              {
                passwordInputType == "password" ? <AiOutlineEyeInvisible size={20} cursor="pointer" onClick={()=>setPasswordInputType("text")}  /> : <AiOutlineEye size={20} cursor="pointer" onClick={()=>setPasswordInputType("password")}  />
              }
              
            </div>

            <Link to={"/"} className="forgot_password_link">
              {t("fgpassword")}
            </Link>
          </div>
          <Button
           
           onClick={()=>confirmLogin()}
            disabled={!loginValidation.email || !loginValidation.password}
            className="login_button"
          >
            {
              t("login")
            }
          </Button>
          <p className="register_link">
             {t("nwptgames")}
            <Link to={"/register"} className="register_link_1">
              {
                t("craccount")
              }
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default Login;
export {Login}