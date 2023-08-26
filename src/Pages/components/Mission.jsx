import React from 'react'
import {LiaBullseyeSolid} from "react-icons/lia"
import {TbTargetArrow} from "react-icons/tb"
import {FaPeopleGroup} from "react-icons/fa6"

const Mission = () => {
  return (
    <div className='flex flex-col md:flex-row gap-y-2 md:gap-y-0 justify-between' >
        <div className='flex flex-row w-[100%] md:w-[32%] gap-x-2 items-center shadow-md md:hover:scale-110 transition duration-500 hover:shadow-xl cursor-pointer p-5 bg-tertiary text-white' >
            <LiaBullseyeSolid className='text-[150px]'/>
            <div>
                <span className='font-bold pb-2 '>VISION</span>
                <p className='font-light'>
                To equip communities and individuals living in Africa’s Great Lakes Region with the Human Rights knowledge and Good Governance skills needed to build a global culture of peace.
                </p>
            </div>
        </div>
        <div className='flex flex-row w-[100%] md:w-[32%] gap-x-2 items-center shadow-md md:hover:scale-110 transition duration-500 hover:shadow-xl cursor-pointer p-5 bg-tertiary text-white' >
            <FaPeopleGroup className='text-[150px] '/>
            <div>
                <span className='font-bold pb-2 '>VALUES</span>
                <p className='font-light'>
                • Accountability
    • Professionalism
    • Advocacy
    • Partnership
    • Financial
    • Sustainability
    • Accountability
                </p>
            </div>
        </div>
        
        <div className='flex flex-row w-[100%] md:w-[32%] gap-x-2 items-center shadow-md md:hover:scale-110 transition duration-500 hover:shadow-xl cursor-pointer p-5 bg-tertiary text-white' >
            <TbTargetArrow className='text-[150px]'/>
            <div>
                <span className='font-bold pb-2 '>MISSION</span>
                <p className='font-light'>
                That Africa’s Great Lakes Region becomes a place where community members and community leaders work together towards peace by holding each other accountable in respecting.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mission
