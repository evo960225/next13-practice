
'use client'
import { useState, useEffect, createContext, FormEvent } from 'react';
import { Input, Textarea } from '@mui/joy';
import { Button } from '@/lib/mui';

export default function MarkdownEdit( params: {title: string, content: string, path: string}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/md-file/${params.path}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setContent(data.content)
      })
  }, [])

  async function updateContent() {
    console.log(title, content);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/md-file/${params.path}`,{
      method: 'POST',
      body: JSON.stringify({ title, content })
    })

  }

  return (
    <>
      <div className='w-[1200px]'>
        <Input placeholder="遊戲標題" variant="solid" size="lg" 
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        ></Input>
        <Textarea placeholder="遊戲內容" variant="solid" 
          minRows={20}
          className="my-4"
          value={content}
          onChange={(e) => { setContent(e.target.value) }}
        >
        </Textarea>
        <Button variant="contained" onClick={async(e)=>{await updateContent()}}>
          儲存
        </Button>
      </div>
    </>
  );
}