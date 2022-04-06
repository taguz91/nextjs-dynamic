import Head from 'next/head'
import React, { FC } from 'react'
import { LoadingProvider } from '../../context/LoadingProvider'

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

            <LoadingProvider>
                <main className={`container p-4 h-screen mx-auto ${classNames}`}>
                    {children}
                </main>
            </LoadingProvider>

        </>
    )
}
