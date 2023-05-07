import { type NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import html from 'remark-html';
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
const contentDirectory = path.join(process.cwd(), 'content');
 
async function getPostData() {
  const fullPath = path.join(contentDirectory, 'test.md');

  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content)


  const contentHtml = processedContent.toString();

  return {
    ...data,
    contentHtml,
  };
}

export async function GET(request: Request)  {
  const re = await getPostData()
  return NextResponse.json({ re })
}


