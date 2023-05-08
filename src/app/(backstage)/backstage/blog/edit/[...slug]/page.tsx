
import { Input, Textarea } from '@/lib/mui-joy';
import { Button } from '@/lib/mui';
import MarkdownEdit from './markdown-edit';

export default async function Page({ params }: { params: { slug: Array<string> } }) {
  const path = params.slug.join('/')
  const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/md-file/${path}`)).json()
  const { title, content } = data

  return (
    <>
      <MarkdownEdit title={title} content={content} path={path}/>
    </>
  );
}
