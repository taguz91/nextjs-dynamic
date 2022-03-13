import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
    title: string,
    description: string
}

export const EmptyLayout: FC<Props> = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main className='container p-4 h-screen mx-auto flex'>
                {children}
            </main>

        </>
    )
}
