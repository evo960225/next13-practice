import Link from 'next/link';
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (<h1>
    <Link href='blog/2000'>2000</Link>
  </h1>);
}
