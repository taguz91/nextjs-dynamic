import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
    title: string,
    description: string,
    classNames?: string
}

export const EmptyLayout: FC<Props> = ({ children, title, description, classNames = '' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <main className={`container p-4 h-screen mx-auto ${classNames}`}>
                {children}
            </main>

        </>
    )
}
