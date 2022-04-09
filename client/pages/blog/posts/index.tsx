import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '@components/Layout'

const PostsHome: NextPage = () => {
    return (
        <Layout>
            <h1 className="text-6xl font-bold">Blog Posts Index</h1>

            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                    <Link href="/blog/posts" passHref={true}>
                        <a className="text-2xl font-bold text-blue-600 hover:text-black focus:text-black">
                            Article Hub
                        </a>
                    </Link>
                    <p className="mt-4 text-xl">Explore in-depth resources on technical subjects.</p>
                </div>
            </div>
        </Layout>
    )
}

export default PostsHome
