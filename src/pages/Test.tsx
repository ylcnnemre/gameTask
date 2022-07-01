import GalleryModal from 'components/Markets/GalleryModal'
import React from 'react'
import { dbGame } from 'data'
const Test = () => {
    console.log(dbGame[0].Screenshots)
  return (
    <div>
        <GalleryModal images={dbGame[0].Screenshots}  />
    </div>
  )
}

export default Test