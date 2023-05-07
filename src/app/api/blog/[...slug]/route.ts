import { type NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import {unified} from 'unified'
import remarkParse from 'remark-parse'
import rehypeSanitize from 'rehype-sanitize'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
const contentDirectory = path.join(process.cwd(), 'content');
 
async function getMarkDownToHtml(dirPath: string, fileName: string) {
  const directory = path.join(contentDirectory, dirPath)
  const fullPath = path.join(directory, fileName)
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

export async function GET(
  request: Request,
  { params }: {
    params: { slug: Array<string>};
  })  {
  const [ yyyy, mm ] = params.slug;
  const { searchParams } = new URL(request.url);
  const searchType = searchParams.get('searchType');
  const htmlContent = await getMarkDownToHtml(`${yyyy}/${mm}`, '1.md')

  return NextResponse.json(htmlContent)
}


