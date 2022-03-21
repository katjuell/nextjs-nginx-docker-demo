import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '@components//Layout'

const BlogHome: NextPage = () => (
    <Layout>
        <h1 className="text-6xl font-bold">Welcome to the Blog</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <div className="mt-6 w-96 rounded-xl border p-6 text-left">
                <Link href="/blog/posts">
                    <a className="text-2xl font-bold text-blue-600 hover:text-black focus:text-black">Blog Posts</a>
                </Link>
                <p className="mt-4 text-xl">Find in-depth articles on technical subjects.</p>
            </div>

            <div className="mt-6 w-96 rounded-xl border p-6 text-left">
                <Link href="/learnings">
                    <a className="text-2xl font-bold text-blue-600 hover:text-black focus:text-black">Curricula</a>
                </Link>
                <p className="mt-4 text-xl">Start working with one of our learning pathways.</p>
            </div>
        </div>
    </Layout>
)

export default BlogHome
