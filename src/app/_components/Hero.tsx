import React from 'react'
import data from '@/constant/data.json'

const Hero = () => {
  const heroInfo = data.hero
  return (
    <div className={`bg-hero-mob w-full flex items-center lg:bg-hero-desk bg-no-repeat bg-cover h-[80vh]`}>
      <div className='text-white  wrapper-container'>
        <div className='w-full lg:max-w-[50%] border-2 p-6 lg:p-8'>
          <h1 className={`text-5xl leading-snug font-light lg:leading-tight lg:text-8xl uppercase`}>
            {heroInfo.message}
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Hero
