import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Demo Next.js App</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="text-6xl font-bold">Next.js Demo</h1>

                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                    <div className="mt-6 w-96 rounded-xl border p-6 text-left">
                        <Link href="/blog">
                            <a className="text-2xl font-bold text-blue-600 hover:text-black focus:text-black">
                                Explore the Content
                            </a>
                        </Link>
                        <p className="mt-4 text-xl">Find in-depth resources on technical subjects.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
