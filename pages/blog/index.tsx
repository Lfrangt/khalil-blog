import fs from 'fs';
import path from 'path';
import Navbar from '../../app/components/Navbar';
import BlogList from '../../app/components/BlogList';
import Footer from '../../app/components/Footer';

export async function getStaticProps() {
  const postsJsonPath = path.join(process.cwd(), 'public', 'posts.json');
  const posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf-8'));
  return { props: { posts } };
}

export default function BlogPage({ posts }: { posts: any[] }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16">
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
        <BlogList posts={posts} />
      </div>
      <Footer />
    </main>
  );
} 