import { useState, useCallback, useEffect } from 'react'

export const useCookie = () => {
    const [hasUser, setHasUser] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false)
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

        user ? setHasUser(true) : setHasUser(false)
    }, [])

    useEffect(() => {
        setIsMounted(true)
    }, [])
    useEffect(() => {
        if (isMounted) {
            setUser()
        }
    }, [isMounted, setUser])

    return {
        callRoute,
        hasUser,
    }
}
