

import { Suspense } from 'react';
import { Button } from '@/lib/mui';

import Link from 'next/link';

export default async function Page() {
  const data = await (await fetch('http://127.0.0.1:3000/api/blog')).json()
  const { files } = data
  
  return (<h1>
    <Suspense fallback={<p> Loading... </p>}>
      <Button variant="contained">A</Button>
      {files.map((x: string) => (
        <Button key={x} variant="text">
          <Link href={`/blog/${x.split('.')[0]}`}>{x}</Link>
        </Button>
      ))}
    </Suspense>
  </h1>);

}
