import fs from 'fs';
import path from 'path';
import { parseMarkdownFile } from './markdown';
import { Post, PostMeta } from '../types/post';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const POSTS_JSON = path.join(process.cwd(), 'public', 'posts.json');

export function getPostSlugs(): string[] {
  // 只从 posts.json 读取 slug
  const posts: PostMeta[] = JSON.parse(fs.readFileSync(POSTS_JSON, 'utf-8'));
  return posts.map(post => post.slug);
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const { meta, content } = parseMarkdownFile(filePath);
  return {
    slug,
    title: meta.title,
    date: meta.date,
    summary: content.slice(0, 100).replace(/\n/g, ' '),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  // 只从 posts.json 读取所有文章元数据
  return JSON.parse(fs.readFileSync(POSTS_JSON, 'utf-8'));
} 