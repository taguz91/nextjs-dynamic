import React, { FC } from 'react'

interface Props {
    title: string;
}

export const Title: FC<Props> = ({ title }) => {
    return (
        <h1 className="text-center my-2 font-semibold text-3xl">{title}</h1>
    )
}

export default Title;