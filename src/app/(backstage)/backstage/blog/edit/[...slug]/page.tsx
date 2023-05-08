import { Input, Textarea } from '@/lib/mui-joy';
import { Button } from '@/lib/mui';
export default async function Page({ params }: { params: { slug: Array<string> } }) {
  const path = params.slug.join('/')
  const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${path}`)).json()
  const { title, contentHtml } = data

  return (
    <>
      <div className='w-[1200px]'>
        <Input placeholder="遊戲標題" variant="solid" size="lg" value={title}></Input>
        <Textarea placeholder="遊戲內容" variant="solid" size="lg" 
          minRows={10}
          className="my-2"
          value={contentHtml}>  
        </Textarea>
        <Button variant="contained">儲存</Button>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
      </div>
    </>
  );
}
