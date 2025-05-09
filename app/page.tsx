import { getAllPosts } from '../lib/posts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

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
