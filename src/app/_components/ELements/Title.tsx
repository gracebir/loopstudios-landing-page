import { Josefin_Sans } from 'next/font/google'
import React, { FC } from 'react'

const josefin = Josefin_Sans({ subsets: ['latin-ext'], weight: ['300'] })
const Title: FC<{text: string}> = ({text}) => {
  return (
    <h1 className={`${josefin.className} text-center lg:text-start text-3xl lg:text-5xl uppercase font-light`}>
      {text}
    </h1>
  )
}

export default Title
