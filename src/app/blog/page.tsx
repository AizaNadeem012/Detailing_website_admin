"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { blogPostsData, getAllBlogCategories } from "@/data/blog/blog-data";
import type { BlogPostData } from "@/data/types";

// Blog Post Card Component
const BlogPostCard = ({ post }: { post: BlogPostData }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
  >
    <Link href={`/blog/${post.slug}`} className="block p-6">
      <div className="flex items-center gap-2 mb-3">
        <Link
          href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
          className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {post.category}
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
        {post.title}
      </h2>

      <p className="text-muted-foreground mb-4 line-clamp-3">
        {post.seo.description}
      </p>

      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.publishedDate).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </div>
      </div>

      <span className="inline-flex items-center gap-2 text-primary font-medium">
        Read Article →
      </span>
    </Link>
  </motion.article>
);

// Hero Section
const HeroSection = () => (
  <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Expert Car Detailing <span className="text-primary">Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Professional tips, industry knowledge, and practical advice for Manchester and Stockport vehicle owners
          who want to keep their cars looking showroom-perfect.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {getAllBlogCategories().map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

// Categories Section
const CategoriesSection = () => {
  const categories = getAllBlogCategories().map((cat) => ({
    name: cat,
    slug: cat.toLowerCase().replace(/\s+/g, '-'),
    count: blogPostsData.filter((p) => p.category === cat).length,
  }));

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Browse by <span className="text-primary">Category</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/category/${category.slug}`}
                className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow block"
              >
                <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} {category.count === 1 ? 'article' : 'articles'}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Blog Page Component
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogPostsData.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
