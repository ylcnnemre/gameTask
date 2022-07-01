import { Button, Input } from "antd";
import React, { useContext, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import { Context } from "App";

const Login = () => {

  const [lang,auth,setAauth] = useContext(Context)

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

    let veri : any= localStorage.getItem("user")

    if(veri!==null)
    {
         const StorageLoginInfo : {email:string,password:string}  =JSON.parse(veri)  
         
         if(loginInfo.email==StorageLoginInfo.email && loginInfo.password==StorageLoginInfo.password)
         {
            setAauth(true)
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
    <section className="login-bg  w-full h-screen ">
      <div className="w-3/4 mx-auto flex justify-center h-full  py-12">
        <div className="h-full  flex flex-col  w-[420px]  w-full ">
          <h1 className="italic text-2xl text-white font-semibold p-4 bg-header-bg w-max mx-auto  rounded-2xl">
            PT
          </h1>
          <h2 className="w-max mx-auto text-2xl font-normal  mt-4 text-white ">
            Sign in to PtGames
          </h2>
          <div className="flex flex-col my-2">
            <p className="font-semibold text-white my-2">Email</p>
            <Input
              placeholder="root@gmail.com"
              className="border-1 border-blue-600 rounded-lg"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <p className="font-semibold text-white my-2">Password</p>

            <div className="border-[1.5px] border-blue-600 rounded-lg flex bg-white items-center pr-3 " >
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

            <Link to={"/"} className="self-end text-[#3B9EEF] mt-1">
              Forgot To Password
            </Link>
          </div>
          <Button
           onClick={()=>confirmLogin()}
            disabled={!loginValidation.email || !loginValidation.password}
            className="!bg-[#2DA44E] border-none rounded-lg hover:bg-cover transition-all !text-white mt-6   hover:bg-[#2DA44E] hover:opacity-80 hover:text-white  "
          >
            Login
          </Button>
          <p className=" w-full mt-6 p-3 border border-gray-600 text-center font-semibold text-white rounded-lg">
            New to PtGames{" "}
            <Link to={"/register"} className="text-[#1D9BF0] ml-2">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default Login;
