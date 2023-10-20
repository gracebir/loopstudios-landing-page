'use client'
import React from 'react'
import data from '@/constant/data.json'
import Link from 'next/link'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['300'] })

const NavModal = () => {
    const navInfo = data.header
    return (
        <div className='absolute z-40 block lg:hidden top-0 bottom-0 right-0 left-0 h-screen w-full bg-black-color py-15 text-white-color px-6'>
            <div className="mt-10 h-[80vh] flex items-center">
                <div className='flex flex-col gap-6'>
                    {navInfo.headerItems.map((item) => (
                        <Link className={`${josefin.className} uppercase text-2xl`} href={item.href} key={`mob-${item.id}`} >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavModal
