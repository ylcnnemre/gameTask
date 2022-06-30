import React, { useEffect, useState } from 'react'

import { dbGame, IdbGame } from 'data'
import {TrendGameCard} from "components"
const Trends = () => {
    
  const [trendGames,setTrendGames] = useState<Array<IdbGame>>([])

  const sortedMovie = () =>{

    const games=dbGame.sort((a,b) => b.Likes - a.Likes )
    
    setTrendGames([
         ...games
    ])
  }

  useEffect(()=>{
     sortedMovie()
  })
  return (
    <section className='w-full grid grid-cols-7 gap-4 '>
        <div className=' col-span-5 '>

             {
                trendGames.map((el,i)=>{
                    
                   return  i<3 &&  (
                        <TrendGameCard  movieData={el}  />
                    )
                   

                })
             }

        </div>
        <div className=' col-span-2 '>
            <div className='flex flex-col h-full justify-evenly '>
                    {
                        dbGame.map((item,i) =>{
                           return  i < 5 && (
                                <div className='w-full flex items-center px-3 py-3  my-1 rounded-3xl hover:bg-header-bg'>
                                    <img src={item.Cover} alt="" className='rounded-2xl'/> 
                                     <span className='text-white ml-4 text-[16px]'>
                                         {
                                            item.Name
                                         }
                                     </span>
                                </div>
                            )

                        })
                    }

            </div>

        </div>
    </section>
  )
}

export default Trends

export {
    Trends
}