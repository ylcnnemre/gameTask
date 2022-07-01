import React, { useState } from "react";
import { Button, Input,Tooltip } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {BiError} from "react-icons/bi"
import { ToastContainer, toast } from "react-toastify";
import { Context } from "App";

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



return (
    <section className="login-bg  w-full h-screen grid grid-cols-2   ">
      <div className="w-full items-center  flex  justify-center h-3/4 my-auto   ">
        <div className="h-full  flex flex-col   w-[420px]  w-full  ">
          <h2 className="w-full text-3xl font-normal text-center  text-white ">
            Sign Up
          </h2>
          <div className="flex flex-col my-2">
            <p className="font-semibold text-white my-2">Email</p>
            <Input
              placeholder="root@gmail.com"
              className="border-1 border-blue-600 rounded-lg"
              onChange={({ target: { value } }) => {setEmail(value)}}
            />
          </div>
          <div className="flex flex-col my-2">
            <p className="font-semibold text-white my-2">Password</p>

            <div className="border-[1.5px] border-blue-600 rounded-lg flex bg-white items-center pr-3 " >
              <Input
                onChange={({ target: { value } }) => {setPassword(value)}}
                type={"password"}
                bordered={false}
                placeholder="1234"
              />
              {
                !registerValidation.password ? <Tooltip placement="right" title={text}>
                    <BiError className="text-red-500" size={20} cursor="pointer" /> 
              </Tooltip>  : null
              }
              
            </div>
          </div>
          <div className="flex flex-col my-2">
            <p className="font-semibold text-white my-2">RePassword</p>
            <div className="border-[1.5px] border-blue-600 rounded-lg flex bg-white items-center pr-3 " >
              <Input
                onChange={({ target: { value } }) => {setRePassword(value) }  } 
                type={"password"}
                bordered={false}
                placeholder="1234"
              />
              {
                !registerValidation.repassword ? <Tooltip placement="right" title={<span>passwords do not match</span>}>
                    <BiError className="text-red-500" size={20} cursor="pointer" /> 
              </Tooltip>  : null
              }
              
            </div>
          </div>
          <Button
            onClick={() => {saveUser()}}
          disabled={Object.values(registerValidation).includes(false)}  
            className="!bg-[#2DA44E] border-none rounded-lg hover:bg-cover transition-all !text-white mt-6   hover:bg-[#2DA44E] hover:opacity-80 hover:text-white  "
          >
            Register
          </Button>
          <p className=" w-full mt-6 p-3 border border-gray-500 text-center font-semibold text-white rounded-lg">
            Already have an account?
            <Link to={"/register"} className="text-blue-600 ml-2">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full h-3/4 my-auto flex flex-col   border-l border-gray-400  ">
        <div className="flex items-center justify-center">
          <h1 className="italic text-2xl text-white font-semibold p-4 bg-header-bg w-max   rounded-2xl">
            PT
          </h1>
           <h2 className="text-2xl text-white italic ml-6">
              PaneraTech Games
           </h2>
        </div>
        <p className="text-center text-header-bg  text-lg mt-12  ">
        Join PaneraTech Games and discover thousands of games to play <Link to={"/"} className="block text-blue-600"> Learn More  </Link>
        </p>
        <Button className="w-[240px] self-center rounded-lg !bg-[#2DA44E] border-none text-white hover:text-white hover:opacity-75 mt-12 ">
             Download PtGames
        </Button>
        <div className="flex flex-1 items-end justify-center ">

            <Link to={"#"} className="mx-6" >
                Terms
            </Link>
            <Link to={"#"} className="mx-6">
                Privact
            </Link>
            <Link to={"#"} className="mx-6">
                Security
            </Link>
            <Link to={"#"} className="mx-6">
                Contact
            </Link>
        </div>
      </div>
      {/*    <ToastContainer autoClose={1000} /> */}
    </section>
  );
};

export default Register;
