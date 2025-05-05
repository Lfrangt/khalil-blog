import fs from 'fs';
import path from 'path';
import { parseMarkdownFile } from './markdown';
import { Post, PostMeta } from '../types/post';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getPostSlugs(): string[] {
  return fs.readdirSync(CONTENT_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
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
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  return posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title, date, summary }) => ({ slug, title, date, summary }));
} 