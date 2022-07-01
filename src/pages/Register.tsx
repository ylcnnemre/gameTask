import React from 'react'
import { Button, Input } from "antd";
import { Link,useNavigate} from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import { Context } from "App";



const Register = () => {
  return (
    <section className="login-bg  w-full h-screen grid grid-cols-2 ">
      <div className="w-full items-center  flex  justify-center h-3/4 my-auto   ">
        <div className="h-full  flex flex-col   w-[420px]  w-full  ">
         {/*  <h1 className="italic text-2xl text-white font-semibold p-4 bg-header-bg w-max mx-auto  rounded-2xl">
            PT
          </h1> */}
          <h2 className="w-max mx-auto text-2xl font-normal  mt-4 text-white ">
            Sign Up
          </h2>
          <div className="flex flex-col my-2">
            <p className="font-semibold text-white my-2">Email</p>
            <Input
              placeholder="root@gmail.com"
              className="border-1 border-blue-600 rounded-lg"
              onChange={({ target: { value } }) => {}}
            />
          </div>
          <div className="flex flex-col my-2">
            <p className="font-semibold text-white my-2">Password</p>

            <div className="border-[1.5px] border-blue-600 rounded-lg flex bg-white items-center pr-3 " >
              <Input
                onChange={({ target: { value } }) => {}}
                type={"password"}
                bordered={false}
                placeholder="1234"
              />

              
            </div>

          </div>
          <Button
           onClick={()=>{}}
          /*   disabled={!loginValidation.email || !loginValidation.password} */
            className="!bg-[#2DA44E] border-none rounded-lg hover:bg-cover transition-all !text-white mt-6   hover:bg-[#2DA44E] hover:opacity-80 hover:text-white  "
          >
            Register
          </Button>
          <p className=" w-full mt-6 p-3 border border-gray-600 text-center font-semibold text-white rounded-lg">
             Already have an account?
            <Link to={"/register"} className="text-[#1D9BF0] ml-2">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div  className='w-full h-3/4 my-auto   border-l border-gray-400  '  >
          aasdasd
      </div>
   {/*    <ToastContainer autoClose={1000} /> */}
    </section>
  )
}

export default Register