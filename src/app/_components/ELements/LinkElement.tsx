'use client'
import Link from 'next/link'
import React, { FC } from 'react'

type linkProps = {
    href: string
    text: string
}

const LinkElement: FC<linkProps> = ({href, text}) => {
  return (
    <Link className={''} href={href}>
      {text}
      <span></span>
    </Link>
  )
}

export default LinkElement
