import fs from 'fs';
import path from 'path';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

export default function Home() {
  const postsJsonPath = path.join(process.cwd(), 'public', 'posts.json');
  const posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf-8'));

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <BlogList posts={posts} />
      <Footer />
    </main>
  );
}
