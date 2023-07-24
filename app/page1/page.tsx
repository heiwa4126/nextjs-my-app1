import FetchNow from '@/components/FetchNow';
import { Metadata } from 'next';

const title = 'page1';
export const metadata: Metadata = {
  title
};

export default function Home() {
  return (
    <main className="mx-4 my-3">
      <h1>{title}</h1>
      <p>SWRをクライアントコンポーネントとして使うサンプル (Reactと同じ)</p>
      <div>
        現在時刻:
        <FetchNow />
      </div>
      <p>これと同じことを React Server Components (RSC) っぽくやってみる</p>
    </main>
  );
}
