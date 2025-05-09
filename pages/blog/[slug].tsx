import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';

export async function getStaticPaths() {
  const postsJsonPath = path.join(process.cwd(), 'public', 'posts.json');
  const posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf-8'));
  const paths = posts.map((post: { slug: string }) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);
  return {
    props: {
      post: {
        slug: params.slug,
        title: data.title || params.slug,
        date: data.date || '',
        content: htmlContent,
      },
    },
  };
}

export default function BlogPostPage({ post }: { post: any }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16">
        <div className="relative py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="text-foreground/60 mb-6">
              {new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <article className="prose lg:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg prose-img:shadow-md">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            <div className="mt-12 pt-6 border-t border-border/20">
              <a href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                返回首页
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 