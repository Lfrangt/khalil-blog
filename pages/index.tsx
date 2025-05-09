import fs from 'fs';
import path from 'path';
import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import BlogList from '../app/components/BlogList';
import Footer from '../app/components/Footer';

export async function getStaticProps() {
  const postsJsonPath = path.join(process.cwd(), 'public', 'posts.json');
  const posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf-8'));
  return { props: { posts } };
}

export default function Home({ posts }: { posts: any[] }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <BlogList posts={posts} />
      <Footer />
    </main>
  );
} 