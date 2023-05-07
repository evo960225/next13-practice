import { type NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
const contentDirectory = path.join(process.cwd(), 'content');
 
function getAllMarkdownFiles(dirPath: string, relativePath:string = '', arrayOfFiles: Array<string> = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const newRelativePath = path.join(relativePath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(fullPath, newRelativePath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      arrayOfFiles.push(newRelativePath);
    }
  });

  return arrayOfFiles;
}

export async function GET(request: Request)  {
  const allFiles = getAllMarkdownFiles(contentDirectory)

  return NextResponse.json({ files: allFiles })
}


