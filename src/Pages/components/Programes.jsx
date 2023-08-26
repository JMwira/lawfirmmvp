import React from 'react'
import ProgramList from './ProgramList'

const Programes = () => {
  return (
    <div className='flex, flex-1 py-0' >
      <div>
        <span className='text-3xl font-bold text-tertiary' >Our Programs</span>
        <div className='w-10 h-2 bg-tertiary mt-2' ></div>
        <p className='text-justify md:w-[90%] w-full mt-2' >
        Our interventions are closely aligned with the UN Sustainable Development Goals (especially goal 16) and the priorities of the respective countries we work in. In a comprehensive way, our activities are grouped around the following thematic areas.
        </p>
      </div>
      <ProgramList/>
    </div>
  )
}

export default Programes
