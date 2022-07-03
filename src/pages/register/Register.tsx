import React, { useContext, useState } from "react";
import { Button, Input,Tooltip } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {BiError} from "react-icons/bi"
import { ToastContainer, toast } from "react-toastify";
import { Context } from "App";
import "./register.scss"
import { useTranslation } from "react-i18next";

const Register = () => {
   const router=useNavigate()
  const [registerValidation,setRegisterValidation]=useState<{email:boolean,password:boolean,repassword:boolean}>({
     email : false,
     password : false,
     repassword : false
  })

  const [userInfo,setUserInfo]=useState<{email:string,password:string,repassword:string}>({
      email : "",
      password : "",
      repassword : ""
  })


  const setEmail=(mail:string):void =>{
    var re = /\S+@\S+\.\S+/;

    if (re.test(mail) ) {
       setUserInfo({
          ...userInfo,
          email  : mail
       })
       setRegisterValidation({
            ...registerValidation,
            email : true
       })   
     
    } else {

        setUserInfo({
            ...userInfo,
            email  : mail
         })
         setRegisterValidation({
              ...registerValidation,
              email : false
         })
    }
     
  }

 
  const setPassword=(password:string):void =>{
    var re = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,}$/;
    
    if(re.test(password))
    {
        setUserInfo({
            ...userInfo,
           password : password 
        })
        setRegisterValidation({
            ...registerValidation,
            password :true
        })
    }
    else {
        setUserInfo({
            ...userInfo,
           password : password 
        })
        setRegisterValidation({
            ...registerValidation,
            password :false
        })
    }
  }

 const setRePassword=(password:string):void =>{
     if(userInfo.password !==""  && userInfo.password === password)
     {
        setRegisterValidation({
             ...registerValidation,
             repassword : true
        })
     }
     else{
        setRegisterValidation({
            ...registerValidation,
            repassword : false
       })
     }
 }

  
  console.log();
  
   const text=<div>
      <p>
             At least 1 uppercase character
      </p>
      <p>
            At least 1 lowercase character
      </p>
      <p>
      At least 3 character
      </p>
   </div>


  const saveUser=()=>{
        const info : any=  {...userInfo}
        delete info.repassword
        localStorage.setItem("user",JSON.stringify(info))

        router("/login")
  }

 const {allGames} =useContext(Context)

 const {t} =useTranslation()

return (


      <section className="register">
      <AiFillHome className="home_icon"  />
      <div className="register_container">
        <div className="register_wrapper">
          <h2 className="register_title">
             {t("register")}
          </h2>
          <div className="email_container">
            <p className="email_title">
              {t("email")}
            </p>
            <Input
              placeholder="root@gmail.com"
              className="email_input"
              onChange={({ target: { value } }) => {setEmail(value)}}
            />
          </div>
          <div className="password_container">
            <p className="password_title">
               {
                t("password")
               }
            </p>

            <div className="password_input_wrapper " >
              <Input
                onChange={({ target: { value } }) => {setPassword(value)}}
                type={"password"}
                bordered={false}
                placeholder="1234"
              />
              {
                !registerValidation.password ? <Tooltip placement="right" title={text}>
                    <BiError className="error_icon" size={20} cursor="pointer" /> 
              </Tooltip>  : null
              }
              
            </div>
          </div>
          <div className="password_container">
            <p className="password_title">{
                t("confirmpassword")
            }</p>
            <div className="password_input_wrapper" >
              <Input
                onChange={({ target: { value } }) => {setRePassword(value) }  } 
                type={"password"}
                bordered={false}
                placeholder="1234"
              />
              {
                !registerValidation.repassword ? <Tooltip placement="right" title={<span>{t("dontmatch")}</span>}>
                    <BiError className="error_icon" size={20} cursor="pointer" /> 
              </Tooltip>  : null
              }
              
            </div>
          </div>
          <Button
            onClick={() => {saveUser()}}
          disabled={Object.values(registerValidation).includes(false)}  
            className="register_button"
          >
            {t("register")}
          </Button>
          <p className="login_link">
              {t("alreadyacc")}
            <Link to={"/login"} className="login_link_1">
              {
                t("login")
              }
            </Link>
          </p>
        </div>
      </div>

      <div className="right_section_container">
        <div className="right_section_header">
          <h1 className="logo">
            PT
          </h1>
           <h2 className="company_name">
              PaneraTech Games
           </h2>
        </div>
        <p className="description ">
          {t("desc")} <Link to={"/"} className="block text-blue-600"> {t("learnmore")}  </Link>
        </p>
        <Button className="download_button ">
             {t("download")}
        </Button>
        <div className="right_section_links">

            <Link to={"#"} className="link" >
                {t("terms")}
            </Link>
            <Link to={"#"} className="link">
                {t("privacy")}
            </Link>
            <Link to={"#"} className="link">
                {t("security")}
            </Link>
            <Link to={"#"} className="link">
                {
                  t("contact")
                }
            </Link>
        </div>
      </div>
      {/*    <ToastContainer autoClose={1000} /> */}
    </section>
  
  );
};

export default Register;
