import Link from 'next/link';
//import { Button } from "@/lib/mui";
import { Button } from '@/lib/mui';
// create page header
export default function pageHeader(props: component) {
  return (<>
    <div className={`flex px-6 py-1 w-full bg-slate-500 ${props.class}`}>
      <h1 className="flex items-center text-xl tracking-widest">
        <Link href="/">{`Hoshiko他家`}</Link>
      </h1>
      <div className="flex m-auto mr-0">
        <ul className="flex items-center">
          <li className="flex ">
            <Link href="/">
              <Button variant="text" className="text-white font-default">
              {`Home`}
              </Button>
            </Link>
          </li>
          <li className="flex">
          <Link href="/blog">
              <Button variant="text" className="text-white font-default">
              {`Blog`}
              </Button>
            </Link>
          </li>
          <li className="flex">
            <Link href="/showcase">
              <Button variant="text" className="text-white font-default">
              {`Showcase`}
              </Button>
            </Link>
          </li>
          <li className="flex">
            <Link href="/about">
              <Button variant="text" className="text-white font-default">
              {`About`}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>);
}