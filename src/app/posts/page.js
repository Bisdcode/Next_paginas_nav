import React from 'react'
import Link from 'next/link'

const PostsPage = () => {
    const postsIds = [1,2,3]
  return (
    <div>
      <main>
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
