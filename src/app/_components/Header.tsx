'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import data from '@/constant/data.json'
import Link from 'next/link'
import LinkElement from './ELements/LinkElement'

const Header = () => {
  const navInfo = data.header
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='fixed left-0 top-0 right-0 py-10'>
      <div className='wrapper-container flex justify-between items-center text-white-color'>
        <Link href={'/'}>
          <Image src={navInfo.logo} alt='logo-header' width={200} height={30} />
        </Link>
        <nav className='hidden lg:flex space-x-10'>
          {navInfo.headerItems.map((item,)=> (
            <LinkElement key={item.id} href={item.href} text={item.label}/>
          ))}
        </nav>
        <button onClick={() => setIsOpen(open => !open)} className='block lg:hidden duration-300'>
          <Image alt='hamburgeer' src={isOpen ? navInfo.close : navInfo.hamburger} width={30} height={30}/>
        </button>
      </div>
    </header>
  )
}

export default Header
