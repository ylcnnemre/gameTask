import { useState,useContext } from 'react'
import {langs} from "data"
import { Context } from 'App'
import {Header} from 'components'
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import NavMenu from './NavMenu';
import Carousel from './Carousel';



const Home = () => {
 
  const ContextData=useContext(Context)

  return (
    <div className='flex flex-col'>
            <Header/>
            <div className='bg-main-bg-color    '>
                <div className='w-3/4 mx-auto'>
                    <NavMenu/>
                    <Carousel/>
                </div>
            </div>
    </div>

  )
}

export default Home
export {Home}