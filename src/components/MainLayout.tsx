import React from 'react'
import {Header} from "components"
const MainLayout = ({children}:any) => {
  return (
    <div className='flex flex-col'>
            <Header/>
            <div className='bg-main-bg-color    '>
                <div className='w-3/4 mx-auto'>
                    {
                        children
                    }
                </div>
            </div>
    </div>
  )
}

export default MainLayout