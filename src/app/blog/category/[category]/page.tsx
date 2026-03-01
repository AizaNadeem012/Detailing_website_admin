import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { CtaSection } from '@/components/shared/CtaSection';
import { getBlogPostsByCategory, getAllBlogCategories } from '@/data/blog/blog-data';
import { Calendar, User } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const formatted = category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return {
    title: `${formatted} Articles | SRV Detailing Blog`,
    description: `Browse our ${formatted.toLowerCase()} articles — expert car care tips, guides and insights from SRV Detailing in Manchester.`,
    alternates: { canonical: `https://www.srvdetailing.co.uk/blog/category/${category}` },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const posts = getBlogPostsByCategory(category);
  const formatted = category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <HeroSection
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: formatted, href: `/blog/category/${category}` },
        ]}
        title={`${formatted} Articles`}
        description={`Expert ${formatted.toLowerCase()} articles and insights from the SRV Detailing team.`}
        badge="Blog Category"
      />

      <main className="max-w-6xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground text-lg">
            No articles found in this category.{' '}
            <Link href="/blog" className="text-primary underline">
              Browse all articles
            </Link>
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 block"
              >
                <div className="p-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-foreground mt-3 mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.seo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <CtaSection />
      <Footer />
    </div>
  );
}
