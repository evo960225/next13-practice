

import { Suspense } from 'react';
import { Button } from '@/lib/mui';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export default async function Page() {
  const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`)).json()
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
