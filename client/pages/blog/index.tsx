import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '@components/Layout'

const BlogHome: NextPage = () => {
    return (
        <Layout>
            <h1 className="text-6xl font-bold">Blog Homepage</h1>

            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                <div className="mt-6 w-96 rounded-xl border p-6 text-left">
                    <Link href="/blog/posts" passHref={true}>
                        <a className="text-2xl font-bold text-blue-600 hover:text-black focus:text-black">
                            Read Articles
                        </a>
                    </Link>
                    <p className="mt-4 text-xl">Explore in-depth resources on technical subjects.</p>
                </div>
            </div>
        </Layout>
    )
}

export default BlogHome
