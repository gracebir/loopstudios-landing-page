'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import data from '@/constant/data.json'
import Link from 'next/link'
import LinkElement from './ELements/LinkElement'
import NavModal from './NavModal'

const Header = () => {
  const navInfo = data.header
  const [isOpen, setIsOpen] = useState(false)
  const [scrollValue, setScrollValue] = useState(0)

  // scroll behaviar
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      setScrollValue(window.pageYOffset)
    })
  },[])
  
  return (
    <header className={`fixed left-0 top-0 duration-300 z-50 right-0 py-9 lg:py-11 ${scrollValue > 200 ? `bg-black`: `bg-none`}`}>
      <div className='wrapper-container flex justify-between items-center text-white-color'>
        <Link className='z-50' href={'/'}>
          <Image src={navInfo.logo} alt='logo-header' width={200} height={30} />
        </Link>
        <nav className='hidden lg:flex space-x-10'>
          {navInfo.headerItems.map((item,) => (
            <LinkElement key={item.id} href={item.href} text={item.label} />
          ))}
        </nav>
        <button onClick={() => setIsOpen(open => !open)} className='block lg:hidden duration-300 z-50'>
          <Image alt='hamburger' src={isOpen ? navInfo.close : navInfo.hamburger} width={30} height={30} />
        </button>
      </div>
      {isOpen && (<NavModal />)}
    </header>
  )
}

export default Header
