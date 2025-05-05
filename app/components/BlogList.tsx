'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post, PostMeta } from '@/types/post';

interface BlogListProps {
  posts: PostMeta[];
}

const BlogList = ({ posts }: BlogListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">最新文章</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            探索我的想法、编程经验和学习心得。
          </p>
          
          {/* 搜索框 */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索文章..."
                className="w-full py-3 px-4 pl-10 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 文章列表 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <PostCard 
                key={post.slug} 
                post={post} 
                index={index} 
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-lg text-foreground/70">没有找到匹配的文章</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface PostCardProps {
  post: PostMeta;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  // 创建一个简单的渐进式延迟动画
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 card-hover"
      style={{ animationDelay }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full z-0"></div>
      
      <div className="p-6 flex flex-col h-full z-10">
        <div className="mb-4 text-sm text-foreground/60">
          {new Date(post.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        
        <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-foreground/70 mb-4 flex-grow">
          {post.summary}...
        </p>
        
        <div className="flex items-center text-primary font-medium">
          阅读更多
          <svg 
            className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogList; 