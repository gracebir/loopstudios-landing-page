import React from 'react'
import data from '@/constant/data.json'
import Title from './ELements/Title'
import { Alata } from 'next/font/google'

const alata = Alata({ subsets: ['latin'], weight: ['400'] })

const Interactive = () => {
  const interactive = data.overview
  return (
    <section className="lg:h-[80vh] z-10 h-[80vh] lg:block mb-10 flex flex-col gap-8 relative w-full">
      <div className="lg:w-[56%] w-full bg-interactive-mob lg:bg-interactive-desk bg-no-repeat bg-cover h-[30vh] lg:h-[60vh]" />
      <div className="lg:w-[56%] flex items-center w-full bg-white-color lg:absolute  static right-0 top-[20%] h-[50vh]">
        <div className='max-w-xl mx-auto flex flex-col items-center lg:items-start gap-6'>
          <Title text={interactive.heading} />
          <p className={`text-dark-gray text-center lg:text-start text-base lg:text-xl font-normal ${alata.className}`}>{interactive.paragraph}</p>
        </div>
      </div>
    </section>
  )
}

export default Interactive
