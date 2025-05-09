const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(process.cwd(), 'content');
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'posts.json');

function getPostSlugs() {
  return fs.readdirSync(CONTENT_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

function getPostMeta(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    summary: content.slice(0, 100).replace(/\n/g, ' '),
  };
}

function main() {
  const slugs = getPostSlugs();
  const posts = slugs.map(getPostMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`Generated ${OUTPUT_FILE} with ${posts.length} posts.`);
}

main(); 