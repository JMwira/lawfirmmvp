import React from 'react'
import news from "../../Assets/news.svg"

const Quotes = () => {
  return (
    <div className='py-10 flex flex-col' >
      {/* <span className='font-bold text-4xl' >
      Shaping Aspirations
      </span>
        <div className='w-20 h-3 bg-secondary mt-5' ></div>
        <span className='font-light text-2xl mt-5' >
            At iPeace, we believe that raising awareness of citizens and their leaders about human rights and good governance on a regular basis is the best way to contribute to the building of sustainable peace.
        </span> */}



<div class="bg-white dark:bg-gray-200 text-center md:text-justify ">
    <div class="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2 class="text-2xl font-bold font-display text-tertiary dark:text-tertiary sm:text-3xl">
            Want to Hear more often from us?
        </h2>
        <p class="mt-2 max-w-xl text-base text-amber-950">
            Want to hear from us about our events or offers? Sign up for our newsletter and we&#x27;ll keep you posted
        </p>
        <div>
            <div class="mt-6 sm:flex jusitfy-start">
                <form class="flex flex-col justify-center w-full md:max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <div class="items-center">
                        <input type="text" id="&quot;form-subscribe-Subscribe" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-0 focus:ring-secondary focus:border-transparent" placeholder="Email"/>
                    </div>
                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-secondary rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-secondary" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
            <div class="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
                <img class="object-cover w-1/2 mx-auto maw-w-44" src={news} alt="shopping item"/>
            </div>
                </div>
            </div>
    </div>
  )
}

export default Quotes
