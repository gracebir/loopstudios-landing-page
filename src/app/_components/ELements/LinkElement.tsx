'use client'
import Link from 'next/link'
import React, { FC } from 'react'

type linkProps = {
    href: string
    text: string
}

const LinkElement: FC<linkProps> = ({href, text}) => {
  return (
    <Link className="text-base font-bold gap-2 flex flex-col items-center" href={href}>
      {text}
      <div className='border-2 w-8 rounded-3xl'/>
    </Link>
  )
}

export default LinkElement
