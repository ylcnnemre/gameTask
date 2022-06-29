import { useState,useContext } from 'react'
import {langs} from "data"
import { Context } from 'App'
import {Header} from 'components'
const Home = () => {
 
  const ContextData=useContext(Context)

  return (
    <Header/>
  )
}

export default Home
export {Home}