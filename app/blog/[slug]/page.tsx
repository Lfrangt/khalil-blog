import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';
import { markdownToHtml } from '../../../lib/markdown';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import fs from 'fs';
import path from 'path';

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        {/* 文章头部 */}
        <div className="relative py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          {/* 装饰元素 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-y-1/2"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="text-foreground/60 mb-6">
              {new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
        
        {/* 文章内容 */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <article className="prose lg:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg prose-img:shadow-md">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>
            
            {/* 返回按钮 */}
            <div className="mt-12 pt-6 border-t border-border/20">
              <a 
                href="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <svg 
                  className="mr-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
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

export async function generateStaticParams() {
  const postsJsonPath = path.join(process.cwd(), 'public', 'posts.json');
  const posts: { slug: string }[] = JSON.parse(fs.readFileSync(postsJsonPath, 'utf-8'));
  return posts.map(post => ({ slug: post.slug }));
} 