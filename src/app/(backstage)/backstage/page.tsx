

import { Suspense } from 'react';
import { Button } from '@/lib/mui';

import Link from 'next/link';

export default async function Page() {
  
  const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`)).json()
  const { files } = data
  
  return (<h1>
    <Suspense fallback={<p> Loading... </p>}>
      <Button variant="contained">A</Button>
      {files.map((x: string) => (
        <Link href={`/blog/${x.split('.')[0]}`} key={x}>
          <Button variant="text">
          {x}
          </Button>
        </Link>
      ))}
    </Suspense>
  </h1>);

}
