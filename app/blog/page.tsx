import { getAllPosts } from '../../lib/posts';
import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const res = await fetch('/posts.json');
  const posts = await res.json();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        {/* 头部 */}
        <div className="relative py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              博客文章
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              探索我的想法、编程经验、学习笔记和生活感悟
            </p>
          </div>
        </div>
        
        {/* 博客列表 */}
        <BlogList posts={posts} />
      </div>
      
      <Footer />
    </main>
  );
} 