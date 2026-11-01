import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Keralaway Journal`,
    description: post.dropcap.slice(0, 160),
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = post.related
    .map((relSlug) => blogPosts.find((p) => p.slug === relSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Header />
      <main className="bg-paper text-ink overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden bg-night flex items-center">
          <div className="absolute inset-0">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/60 to-night" />
          </div>
          <div className="relative z-10 max-w-4xl px-6 md:px-12 mt-20">
            <p className="small-caps text-brass mb-4">{post.kicker}</p>
            <h1 className="editorial-headline text-paper text-4xl md:text-6xl leading-tight">
              {post.title}
            </h1>
            <p className="font-display italic text-paper/70 text-lg md:text-xl mt-4">
              {post.byline}
            </p>
          </div>
        </section>

        {/* ── READING COLUMN ── */}
        <article className="py-24 px-6 bg-paper">
          <div className="max-w-2xl mx-auto font-display text-lg leading-relaxed text-ink/80 space-y-8">
            <p className="blog-dropcap">{post.dropcap}</p>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <blockquote className="blog-blockquote">&ldquo;{post.quote}&rdquo;</blockquote>
            {post.afterQuote.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Author Bio Card */}
          <div className="max-w-2xl mx-auto mt-20 pt-8 border-t border-ink/15">
            <div className="flex items-start gap-6 bg-mist/20 p-6 rounded">
              <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-mist">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div>
                <h4 className="font-display text-xl text-ink font-semibold">
                  {post.author.name}
                </h4>
                <p className="text-xs small-caps text-brass mt-0.5">{post.author.role}</p>
                <p className="font-body text-ink/75 text-sm mt-3 leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Related Readings */}
          {relatedPosts.length > 0 && (
            <div className="max-w-2xl mx-auto mt-20 pt-12 border-t border-ink/15">
              <h4 className="small-caps text-spice mb-6">Related Readings</h4>
              <div className="space-y-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="flex justify-between items-center group py-2 border-b border-ink/10 hover:text-brass transition-colors"
                  >
                    <span className="font-display text-lg">{rel.title}</span>
                    <span className="small-caps text-ink/40 group-hover:text-brass">Read &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
