import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export function parseMarkdownFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    meta: data as { title: string; date: string },
    content,
  };
}

export function markdownToHtml(markdown: string): string {
  return marked(markdown);
} 