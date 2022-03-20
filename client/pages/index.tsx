import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'

const Home: NextPage = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [hasUser, setHasUser] = useState<boolean>(false)
    const callRoute = async (route: string): Promise<void> => {
        try {
            await fetch(`http://localhost:3001/${route}`, {
                method: 'get',
                credentials: 'include',
            })
            setUser()
        } catch (err) {
            console.error(`Error: ${err}`)
        }
    }
    const getCookies = (): string => {
        const getAllCookies: { [index: string]: string } = document.cookie
            .split(';')
            .reduce((key, string) => Object.assign(key, { [string.split('=')[0].trim()]: string.split('=')[1] }), {})
        const user = getAllCookies.loginCookie

        return user
    }
    const setUser = useCallback(() => {
        const user = getCookies()

        user === undefined ? setHasUser(true) : setHasUser(false)
    }, [])
    useEffect(() => {
        setIsMounted(true)
    }, [])
    useEffect(() => {
        if (isMounted) {
            setUser()
        }
    }, [isMounted, setUser])
    useEffect(() => {
        setUser()
    }, [hasUser, setUser])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Demo Next.js App</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <div className="mb-20 flex w-full items-center justify-end px-48 text-center">
                    {hasUser ? (
                        <button onClick={() => callRoute('login')} className="font-bold text-blue-600">
                            Login
                        </button>
                    ) : (
                        <button onClick={() => callRoute('logout')} className="font-bold text-blue-600">
                            Logout
                        </button>
                    )}
                </div>
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
