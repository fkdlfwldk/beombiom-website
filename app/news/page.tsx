import Link from "next/link"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { getPublishedPosts } from "@/lib/data/posts"

export default async function NewsListPage() {
  const posts = await getPublishedPosts()

  return (
    <>
      <NavBar />
      <main className="pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-3">소식</h1>
            <p className="text-muted-foreground mb-12">BEOMBIOM의 최신 소식을 전해드립니다</p>

            {posts.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground">아직 등록된 소식이 없습니다.</div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className="block border-b border-border pb-8 last:border-0 group"
                  >
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full aspect-[16/9] object-cover rounded-lg mb-4"
                      />
                    )}
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString("ko-KR")}
                    </p>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-beombiom-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
