import React from 'react'
import {BiLogoFacebook, BiLogoTwitter, BiLogoGithub, BiLogoInstagram} from "react-icons/bi"
import {PiChatTeardropDotsBold} from "react-icons/pi"

const Social = () => {
  return (
    <div className=' z-20 fixed left-[30%] md:left-5 bottom-5 flex flex-row md:p-2 md:flex-col w-[40%] md:w-auto justify-between bg-white shadow-lg px-4 rounded-3xl' >
    <div className='text-2xl py-2'>
      <BiLogoTwitter className='text-secondary'/>
    </div>
      <div className='text-2xl py-2'>
        <PiChatTeardropDotsBold className='text-secondary'/>
      </div>
      <div className='text-2xl py-2'>
        <BiLogoInstagram className='text-secondary'/>
      </div>
    </div>
  )
}

export default Social
