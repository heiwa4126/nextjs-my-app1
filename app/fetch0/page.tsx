import FetchNow, { api as FetchNowApi } from '@/components/FetchNow';
import { Metadata } from 'next';
import Link from 'next/link';

const title = 'fetch0';
export const metadata: Metadata = {
  title
};

export default async function Page() {
  return (
    <main>
      <h1>{title}</h1>
      <p>
        <Link href="https://swr.vercel.app/">SWR</Link> をクライアントコンポーネントとして使うサンプル (Reactと同じ)
      </p>
      <p>API: {FetchNowApi}</p>
      <div>
        現在時刻: <FetchNow />
      </div>
      <ul className="m-0 mt-4">
        <li className="m-0">APIには1秒sleep()が入ってます。</li>
        <li className="m-0">
          これと同じことを <Link href="/fetch1">fetch1</Link> では React Server Components (RSC) っぽくやってみる。
        </li>
      </ul>
    </main>
  );
}
