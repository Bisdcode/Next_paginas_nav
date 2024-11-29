import React from 'react'
import Link from 'next/link'

const PostsPage = () => {
    const postsIds = [1,2,3]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Blog</h1>
      <ul>
        {postsIds.map((id) => (
            <li key={id}>
                <Link href={`/posts/${id}`}>Ver Post {id}</Link>
            </li>
        ))}
      </ul>
      </main> 
      <Link href="/">Ir para Home</Link>
    </div>
  )
}

export default PostsPage
