import Head from 'next/head'
import { FunctionComponent } from 'react'

export const Layout: FunctionComponent = ({ children }) => (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
            <title>Demo Next.js App</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">{children}</main>
    </div>
)
