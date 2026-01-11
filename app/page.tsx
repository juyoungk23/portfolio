import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  const posts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="prose dark:prose-invert">
      {posts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {new Date(post.date).toLocaleDateString()}
          </p>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
