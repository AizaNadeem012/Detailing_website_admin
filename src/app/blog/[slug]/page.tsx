import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostPageTemplate } from '@/components/pages/BlogPostPageTemplate';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog/blog-data';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: post.seo.canonical },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostPageTemplate data={post} />;
}
