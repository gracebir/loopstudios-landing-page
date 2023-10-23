import Image from 'next/image'
import React from 'react'
import data from '@/constant/data.json'
import LinkElement from './ELements/LinkElement'
import { Alata } from 'next/font/google'

const alata = Alata({ subsets: ['latin'], weight: ['400'] })

const Footer = () => {
  const footerData = data.footer
  return (
    <footer className='bg-black-color py-8 lg:py-14 '>
      <div className='wrapper-container flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-between'>
        <div className='footer-container'>
          <a href="#">
            <Image src={data.header.logo} alt='logo-header' width={200} height={30} />
          </a>
          <div className='flex flex-col items-center text-white gap-6 lg:gap-8 lg:flex-row'>
            {data.header.headerItems.map((item) => (
             <LinkElement text={item.label} href='#' key={`footer-${item.id}`}/>
            ))}
          </div>
        </div>
        <div className={`text-white-color ${alata.className} footer-container`}>
          <div className='flex flex-row gap-6 items-center'>
            {footerData.socials.map((social) => (
              <a key={social.id} href="#">
                <Image className='w-5 lg:w-8' src={social.icon} alt='logo-header' width={20} height={20} />
              </a>
            ))}
          </div>
          <p>{footerData['copy-right']}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
