import React from 'react'
import data from '@/constant/data.json'
import { Josefin_Sans } from 'next/font/google'


const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['200', '300'] })

const Hero = () => {
  const heroInfo = data.hero
  return (
    <div className={`bg-hero-mob w-full flex items-center lg:bg-hero-desk bg-no-repeat bg-cover h-[90vh]`}>
      <div className='text-white wrapper-container flex-1'>
        <div className='sm:w-full md:w-full lg:max-w-[55%] border-2 px-6 py-4 lg:py-5'>
          <h1 className={`text-4xl font-light leading-none lg:text-[5.5vw] ${josefin.className} uppercase`}>
            {heroInfo.message}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
