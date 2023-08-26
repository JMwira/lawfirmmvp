import React from 'react'
import {BiMenu, BiLogIn, BiLogInCircle,BiToggleRight} from "react-icons/bi"
import Logo from '../../Assets/iPeaceLogo.png'

const Header = () => {
  return (
    <div className='bg-white shadow-md flex flex-1 flex-row pt-5 pb-5 items-center justify-between px-5 fixed z-20 w-[100%]' >
        <div className='flex flex-row justify-center gap-x-2 items-center' >
            <BiMenu className='text-xl' />
            <div className='font-light text-2xl' >
              <img src={Logo} className='w-[100px]' alt="" />
            </div>
        </div>
        <div className="flex flex-row items-center gap-x-2 ">
            <div className='flex flex-row items-center gap-x-2 '>
              <span >SignIn</span>
              <div className='p-2 bg-slate-200 rounded-xl text-xl' ><BiLogInCircle/></div>
            </div>
        </div>
    </div>
  )
}

export default Header
