import React, { FC } from 'react'

interface Props {
    title: string;
}

export const Title: FC<Props> = ({ title }) => {
    return (
        <h1 className='font-semibold mb-3 text-center text-3xl'>{title}</h1>
    )
}

export default Title;