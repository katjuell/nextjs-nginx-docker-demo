import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '@components/Layout'
import { useCookie } from '@hooks/cookie'

const Home: NextPage = () => {
    const cookieHook = useCookie()

    return (
        <Layout>
            <div className="space-between mb-20 flex w-2/4 items-center justify-end px-48 text-center">
                {!cookieHook.hasUser ? (
                    <button onClick={() => cookieHook.callRoute('login')} className="mr-3 font-bold text-blue-600">
                        Login
                    </button>
                ) : (
                    <button onClick={() => cookieHook.callRoute('logout')} className="mr-3 font-bold text-blue-600">
                        Logout
                    </button>
                )}
            </div>
            <h1 className="text-6xl font-bold">Next.js Demo</h1>

            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                <div className="mt-6 w-96 rounded-xl border p-6 text-left">
                    <Link href="/blog.html" passHref={true}>
                        <a className="text-2xl font-bold text-blue-600 hover:text-black focus:text-black">
                            Explore the Blog
                        </a>
                    </Link>
                    <p className="mt-4 text-xl">Find resources on technical subjects.</p>
                </div>

                {cookieHook.hasUser && (
                    <div className="mt-6 w-96 rounded-xl border p-6 text-left">
                        <Link href="/user-stories">
                            <a className="text-2xl font-bold text-blue-600 hover:text-black focus:text-black">
                                User Stories
                            </a>
                        </Link>
                        <p className="mt-4 text-xl">Hear more from happy clients.</p>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Home
