import React from 'react'
import data from '@/constant/data.json'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['300'] })

const Hero = () => {
  const heroInfo = data.hero
  return (
    <div className={`bg-hero-mob w-full flex items-center lg:bg-hero-desk bg-no-repeat bg-cover h-[80vh]`}>
      <div className='text-white  wrapper-container'>
        <div className='w-full lg:max-w-[55%] border-2 p-4 lg:p-6'>
          <h1 className={`${josefin.className} text-5xl leading-snug font-light lg:leading-tight lg:text-8xl uppercase`}>
            {heroInfo.message}
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Hero
