import React from 'react'
import {CgDetailsMore} from "react-icons/cg"


const ProgramList = () => {
    const one = `https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg`
    const two = `https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg`
  return (
    <div>
        <div className='w-full' >
            <div class="grid md:grid-cols-3 grid-cols-1 gap-y-2 mt-8">
                <div className='md:w-[98%] flex flex-col gap-y-2 shadow-md p-0 rounded-md bg-tertiary text-white' >
                    <img src={one} alt="" className='h-[200px] w-[100%] object-cover rounded-t-md' loading='lazy' />
                    <div className='p-4 flex flex-col py-0 gap-y-4' >
                        <span className='font-bold text-xl uppercase mt-2' >Access to justice</span>
                        <span classname='font-extralight'>Rights are not worth it if they are not exercised. Certain categories of people face challenges to enjoy their rights. That is why iPeace has been working hard with leaders and communities to ensure that vulnerable people have access to justice like any other citizens.</span>
                        <button className='flex flex-row items-center gap-x-2 bg-tertiary px-0 py-3 text-white text-center  md:text-left rounded-md mt-0' >
                            <span>Read More</span>
                            <CgDetailsMore className='mt-1' />
                        </button>
                    </div>
                </div>


                <div className='md:w-[98%] flex flex-col gap-y-2 shadow-md p-0 rounded-md bg-tertiary text-white' >
                    <img src={one} alt="" className='h-[200px] w-[100%] object-cover rounded-t-md' loading='lazy' />
                    <div className='p-4 flex flex-col py-0 gap-y-4' >
                        <span className='font-bold text-xl uppercase mt-2' >Human Rights Education</span>
                        <span classname='font-extralight'>To sustainably stop human rights violations, people must be fully aware and understand their rights as enshrined in different laws and regulations.</span>
                        <button className='flex flex-row items-center gap-x-2 bg-tertiary px-0 py-3 text-white text-center  md:text-left rounded-md mt-0' >
                            <span>Read More</span>
                            <CgDetailsMore className='mt-1' />
                        </button>
                    </div>
                </div>
                

                <div className='md:w-[98%] flex flex-col gap-y-2 shadow-md p-0 rounded-md bg-tertiary text-white' >
                    <img src={one} alt="" className='h-[200px] w-[100%] object-cover rounded-t-md' loading='lazy' />
                    <div className='p-4 flex flex-col py-0 gap-y-4' >
                        <span className='font-bold text-xl uppercase mt-2' >Enhancement of good governance</span>
                        <span classname='font-extralight'>Good Governance is key to a stable community. Among other things, Good Governance implies that local authorities are transparent and that they promote people’s participation in the decision-making process.</span>
                        <button className='flex flex-row items-center gap-x-2 bg-tertiary px-0 py-3 text-white text-center  md:text-left rounded-md mt-0' >
                            <span>Read More</span>
                            <CgDetailsMore className='mt-1' />
                        </button>
                    </div>
                </div>
                

                <div className='md:w-[98%] flex flex-col gap-y-2 shadow-md p-0 rounded-md bg-tertiary text-white' >
                    <img src={one} alt="" className='h-[200px] w-[100%] object-cover rounded-t-md' loading='lazy' />
                    <div className='p-4 flex flex-col py-0 gap-y-4' >
                        <span className='font-bold text-xl uppercase mt-2' >Peace Building and Reconciliation</span>
                        <span classname='font-extralight'>Sustainable peace is the final goal pursued by iPeace As an organization working in post-conflict regions, iPeace has programs that aim to reinforce peaceful cohabitation among peoples</span>
                        <button className='flex flex-row items-center gap-x-2 bg-tertiary px-0 py-3 text-white text-center  md:text-left rounded-md mt-0' >
                            <span>Read More</span>
                            <CgDetailsMore className='mt-1' />
                        </button>
                    </div>
                </div>

                <div className='md:w-[98%] flex flex-col gap-y-2 shadow-md p-0 rounded-md bg-tertiary text-white' >
                    <img src={one} alt="" className='h-[200px] w-[100%] object-cover rounded-t-md' loading='lazy' />
                    <div className='p-4 flex flex-col py-0 gap-y-4' >
                        <span className='font-bold text-xl uppercase mt-2' >Digital Transformation and Human Rights</span>
                        <span classname='font-extralight'>Technology is quickly transforming the society. Digital transformation is considered as the royal way to fast track economic development in developing countries. For that reason, heavy investments are done in digital solutions to bring critical services to the most vulnerable, to create jobs, to strengthen small and medium businesses, to enable trade and services, and to build resilience. </span>
                        <button className='flex flex-row items-center gap-x-2 bg-tertiary px-0 py-3 text-white text-center  md:text-left rounded-md mt-0' >
                            <span>Read More</span>
                            <CgDetailsMore className='mt-1' />
                        </button>
                    </div>
                </div>

                <div className='md:w-[98%] flex flex-col gap-y-2 shadow-md p-0 rounded-md bg-tertiary text-white' >
                    <img src={one} alt="" className='h-[200px] w-[100%] object-cover rounded-t-md' loading='lazy' />
                    <div className='p-4 flex flex-col py-0 gap-y-4' >
                        <span className='font-bold text-xl uppercase mt-2' >Refugees, Asylum-Seekers and Migrants</span>
                        <span classname='font-extralight'>People may seek to rebuild their lives in a foreign country for multiple reasons. While some may choose to leave their countries for a better job or education, others can be forced to escape from persecution or human rights abuses.</span>
                        <button className='flex flex-row items-center gap-x-2 bg-tertiary px-0 py-3 text-white text-center  md:text-left rounded-md mt-0' >
                            <span>Read More</span>
                            <CgDetailsMore className='mt-1' />
                        </button>
                    </div>
                </div>

                <div className='md:w-[98%] flex flex-col gap-y-2 shadow-md p-0 rounded-md bg-tertiary text-white' >
                    <img src={one} alt="" className='h-[200px] w-[100%] object-cover rounded-t-md' loading='lazy' />
                    <div className='p-4 flex flex-col py-0 gap-y-4' >
                        <span className='font-bold text-xl uppercase mt-2' >Gender Equality, Economic inclusion and Wowen Empowement</span>
                        <span classname='font-extralight'>iPeace applies a transformative approach to gender norms in all its programs and activities. The goal is to change social and gender norms to fight against unequal power and privileges between people of different sexes in order to free people and communities from harmful and destructive norms. </span>
                        <button className='flex flex-row items-center gap-x-2 bg-tertiary px-0 py-3 text-white text-center  md:text-left rounded-md mt-0' >
                            <span>Read More</span>
                            <CgDetailsMore className='mt-1' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramList
