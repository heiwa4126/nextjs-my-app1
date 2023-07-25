import { Metadata } from 'next';
import Link from 'next/link';

const title = 'fetch1';

export const metadata: Metadata = {
  title
};

type Now = {
  now: string;
};

const api = 'http://localhost:3000/api/now';

const options: RequestInit = {
  method: 'POST',
  headers: {
    accept: 'application/json' // responseはJSONのみ受け入れ
  },
  next: { revalidate: 10 } // cache test
};

async function getData(): Promise<Now> {
  const res = await fetch(api, options);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page({}) {
  const data = await getData();
  // const data = { now: 'dummy' };
  return (
    <main className="mx-4 my-3">
      <h1>{title}</h1>
      <p>
        このへん参照:{' '}
        <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching">
          Data Fetching: Fetching | Next.js
        </Link>
      </p>
      <div>
        現在時刻: <div>{data.now}</div>
      </div>
      <p>
        <div>* SSRなんで「更新」ボタンはありません。</div>
        <div>* キャッシュのテストで、10秒は同じ時間が表示されます。</div>
      </p>
    </main>
  );
}
