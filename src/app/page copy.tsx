
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Suspense } from 'react';
import { Button } from '../lib/mui';
import Loading from './loading';

export default async function Page() {

  const data = await fetch('http://localhost:3000/api/user', 
    { method: 'GET',  next: { revalidate: 1 }  }).then(x => x.json())

  return (<h1>
    <Suspense fallback={<p> Loading... </p>}>
      <Button variant="contained">Hello World</Button>
    </Suspense>
  </h1>);

}
