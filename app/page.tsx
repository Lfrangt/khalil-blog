import { getAllPosts } from '../lib/posts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

// 需要创建一个临时的 profile.jpg 图片
export const dynamic = 'force-dynamic';

export default async function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <BlogList posts={posts} />
      <Footer />
    </main>
  );
}
