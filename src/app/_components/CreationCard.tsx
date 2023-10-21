import React, { FC } from 'react'

type creationCardProps = {
    text: string
    bgImage: string
}

const CreationCard: FC<creationCardProps> = ({ text, bgImage }) => {
    return (
        <div className={`w-full ${bgImage} flex flex-col justify-end bg-cover bg-no-repeat p-6 lg:p-8`}>
            <h3 className='uppercase text-lg lg:text-xl'>{text}</h3>
        </div>
    )
}

export default CreationCard
