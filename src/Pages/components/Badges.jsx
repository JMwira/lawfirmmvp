import React from 'react'
import {FaCircleDot} from "react-icons/fa6"

const Badges = () => {
  return (
    <div className='flex flex-1' >
<section class="relative pt-16 bg-blueGray-50">
<div class="container mx-auto">
  <div class="flex flex-wrap flex-row items-center">
    <div class="flex w-[100%] md:w-[40%] px-0 md:px-4 mr-auto ml-auto">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-tertiary">
        <img alt="..." loading='lazy' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg"/>
        <blockquote class="relative p-8">
          <h4 class="text-xl font-bold text-white">
          Shaping Aspirations
          </h4>
          <p class="text-md font-light mt-2 text-white">
          At iPeace, we believe that raising awareness of citizens and their leaders about human rights and good governance on a regular basis is the best way to contribute to the building of sustainable peace.
          </p>
        </blockquote>
      </div>
    </div>

    <div class="flex-1 px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 md:px-4">
          <div class="relative flex flex-col mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <div>
                    <FaCircleDot className='text-secondary' />
                </div>
              </div>
              <h6 class="text-xl mb-1 font-bold">CAPACITY BUILDING FOR MEANINGFUL ENGAGEMENT</h6>
              <p class="mb-4 text-blueGray-500">
              iPeace organizes several capacity-building sessions for the members of our target communities in order to empower them with necessary knowledge and skills to be able to claim their rights as well as to respect and protect those of the others.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <div>
                    <FaCircleDot className='text-secondary' />
                </div>
              </div>
              <h6 class="text-xl mb-1 font-bold">
                RESEARCH FOR EVIDENCE-BASED CONCLUSIONS
              </h6>
              <p class="mb-4 text-blueGray-500">
              iPeace conducts research to understand specific issues threatening the peaceful enjoyment of human rights and undermining  the observation of good governance principles.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 md:px-4">
          <div class="relative flex flex-col min-w-0 mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <div>
                    <FaCircleDot className='text-secondary' />
                </div>
              </div>
              <h6 class="text-xl mb-1 font-bold">LEGAL AID FOR EQUAL ACCESS TO JUSTICE FOR ALL</h6>
              <p class="mb-4 text-blueGray-500">
              At iPeace we believe that providing free legal advice and access to justice to vulnerable people are critical to the protection of human rights and the preservation of human welfare.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <div>
                    <FaCircleDot className='text-secondary' />
                </div>
              </div>
              <h6 class="text-xl mb-1 font-bold">ADVOCACY FOR BETTER DECISION AND POLICIES</h6>
              <p class="mb-4 text-blueGray-500">
              Peace implements advocacy campaigns to raise awareness of law-makers and policy-makers about major challenges that members of vulnerable groups face and which hinder their full enjoyment of their rights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default Badges
