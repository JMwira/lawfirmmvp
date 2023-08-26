import React from 'react'
import bgImage from "../Assets/2.jpg"
import Logo from "../Assets/iPeaceLogo.png"
import Mission from './components/Mission'
import Quotes from './components/Quotes'
import Badges from './components/Badges'
import Programes from './components/Programes'

const Home = () => {
  return (
    <div className='relative py-18 text-justify' >
      <div className=' justify-center items-center' >
        <div className='h-[700px] md:h-[700px] absolute w-full' >
          <img src={bgImage} className='w-[100%] h-[100%] object-cover' alt="" loading='lazy' />
        </div>
        <div className='relative h-[700px] w-[100%] m-auto bg-black bg-opacity-40 ' >
        </div>
      </div>
      {/* mission Vision */}
      <div className='px-4 md:p-20 mt-[-100px] md:mt-[-170px] z-10 relative' >
      <Mission/>
      
      <div className='px-5 md:px-10 pt-16 pb-10 flex flex-col gap-y-6 md:gap-y-0 md:flex-row items-center gap-x-10' >
        <div className='w-[80%] md:w-[100%] '>
          <img src={Logo} className='object-cover' alt="" loading='lazy' />
        </div>
        <div className=''>
          <p className='z-11 text-l' >
              We are iPeace, Initiatives for Peace and Human Rights, a non profit organization that has been working since 2001 to help communities and individuals in Africa’s Great Lakes Region achieve sustainable peaceful coexistence using human rights and good governance education.
              iPeace has independently registered organizations in Burundi, DR Congo and Rwanda, which closely collaborate to achieve their shared mission. In the Netherlands, Stichting Initiatives for Peace and Human Rights (SIPHR) is set to raise financial support for the organizations activities in Africa.
          </p>
          <span className='text-link cursor-pointer ' >http://iphr-ipdh.org/</span>
        </div>
      </div>

      <Badges/>
      <Quotes/>
      <Programes/>
      </div>
    </div>
  )
}

export default Home
