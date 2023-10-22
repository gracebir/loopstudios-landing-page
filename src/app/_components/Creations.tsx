import React, { FC } from 'react'
import Title from './ELements/Title'
import data from '@/constant/data.json'
import { Josefin_Sans } from 'next/font/google'
import CreationCard from './CreationCard'

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['300'] })


const Button: FC<{ text: string, isMob: boolean }> = ({ text, isMob }) => {
  return (
    <button className={`py-2 border border-black ${isMob ? `block lg:hidden` : `hidden lg:block`} px-10 lg:px-16 text-base hover:text-white hover:bg-black-color duration-300 lg:text-lg uppercase font-light lg:py-3`}>
      {text}
    </button>
  )
}

const Creations = () => {
  const creation = data.creations
  return (
    <section className={`flex flex-col ${josefin.className} items-center gap-8 lg:gap-10`}>
      <div className='flex justify-between items-center lg:flex-1 lg:w-full'>
        <Title text={creation.title} />
        <Button isMob={false} text={creation.btnText} />
      </div>
      <div className='w-full flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8'>
        {creation.creationItems.map(({ id, title, bgImage }) => (
          <CreationCard font={josefin} key={id} text={title} bgImage={bgImage} />
        ))}
      </div>
      <Button isMob={true} text={creation.btnText} />
    </section>
  )
}

export default Creations
