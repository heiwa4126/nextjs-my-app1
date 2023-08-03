import FetchNow, { api as FetchNowApi } from '@/components/FetchNow';
import { Metadata } from 'next';

const title = 'fetch0';
export const metadata: Metadata = {
  title
};

export default async function Page() {
  return (
    <main>
      <h1>{title}</h1>
      <p>SWRをクライアントコンポーネントとして使うサンプル (Reactと同じ)</p>
      <p>API: {FetchNowApi}</p>
      <div>
        現在時刻: <FetchNow />
      </div>
      <p>これと同じことを React Server Components (RSC) っぽくやってみる</p>
    </main>
  );
}
