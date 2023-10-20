'use client'
import Link from 'next/link'
import React, { FC } from 'react'

type linkProps = {
  href: string
  text: string
}

const LinkElement: FC<linkProps> = ({ href, text }) => {
  return (
    <Link className="text-base group font-bold gap-2 duration-500 flex flex-col items-center" href={href}>
      {text}
      <div className='h-1 w-8 group-hover:bg-white rounded-3xl' />
    </Link>
  )
}

export default LinkElement
