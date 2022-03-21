import { FunctionComponent, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

export const Nav: FunctionComponent = () => {
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
        <div className="space-between mb-20 flex w-2/4 items-center justify-end px-48 text-center">
            {hasUser ? (
                <button onClick={() => callRoute('login')} className="mr-3 font-bold text-blue-600">
                    Login
                </button>
            ) : (
                <button onClick={() => callRoute('logout')} className="mr-3 font-bold text-blue-600">
                    Logout
                </button>
            )}
            <Link href="/" passHref={true}>
                <a className="font-bold text-blue-600">Home</a>
            </Link>
        </div>
    )
}
