import React from 'react'
import {Header} from "components"
import "./mainLayout.scss"

const MainLayout = ({children}:any) => {


  return (
    <div className='layout_container'>
            <Header/>
            <div className='layout_children_wrapper'>
                <div className='children'>
                    {
                        children
                    }
                </div>
            </div>
    </div>
  )
}

export default MainLayout