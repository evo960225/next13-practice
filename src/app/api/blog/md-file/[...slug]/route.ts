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
 
async function getMarkDownContent(dirPath: string, fileName: string) {
  const directory = path.join(contentDirectory, dirPath)
  const fullPath = path.join(directory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}

export async function GET(
  request: Request,
  { params }: {
    params: { slug: Array<string>};
  }) {
  const [ yyyy, mm ] = params.slug;
  const { searchParams } = new URL(request.url);
  const searchType = searchParams.get('searchType');
  const mdContent = await getMarkDownContent(`${yyyy}/${mm}`, '1.md')

  return NextResponse.json(mdContent)
}

async function updateMarkDownContent(dirPath: string, fileName: string, content: string) {
  const directory = path.join(contentDirectory, dirPath)
  const fullPath = path.join(directory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  const updatedFileContent = matter.stringify(content, data);
  fs.writeFileSync(fullPath, updatedFileContent, { encoding: 'utf-8' });

  return {
    message: 'ok'
  };
}

export async function POST(
  request: Request,
  { params }: {
    params: { slug: Array<string>};
  }) {
  const res = await request.json();
  const [ yyyy, mm ] = params.slug;
  const { searchParams } = new URL(request.url);
  const searchType = searchParams.get('searchType');
  const mdContent = await updateMarkDownContent(`${yyyy}/${mm}`, '1.md', res.content)

  return NextResponse.json(mdContent)
}


