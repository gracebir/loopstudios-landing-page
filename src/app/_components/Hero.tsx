import React from 'react'
import data from '@/constant/data.json'
import { Josefin_Sans } from 'next/font/google'


const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['200', '300'] })

const Hero = () => {
  const heroInfo = data.hero
  return (
    <div className={`bg-hero-mob w-full flex items-center lg:bg-hero-desk bg-no-repeat bg-cover h-[90vh]`}>
      <div className='text-white wrapper-container flex-1'>
        <div className='sm:w-full md:w-full flex flex-col items-start px-6 py-4 lg:py-5'>
          <h1 className={`font-light hero-text lg:w-1/2 w-full leading-none border px-6 py-4 lg:py-5 ${josefin.className} uppercase`}>
            {heroInfo.message}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
