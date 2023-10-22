'use client'
import { NextFont } from 'next/dist/compiled/@next/font'
import React, { FC } from 'react'

type creationCardProps = {
    text: string
    bgImage: string
    font: NextFont
}

const CreationCard: FC<creationCardProps> = ({ text, bgImage, font }) => {
    return (
        <div className={`${font.className} w-full ${bgImage} relative lg:h-[58vh] h-[20vh]  bg-cover bg-no-repeat`}>
            <div className='absolute w-full bg-black bg-opacity-40 top-0 flex flex-col p-6 lg:p-8 justify-end right-0 left-0 bottom-0'>
                <h3 className='uppercase text-xl lg:text-2xl font-light text-white-color'>{text}</h3>
            </div>
        </div>
    )
}

export default CreationCard
