import Loading from '@/components/Loading';
import { APP_URL } from '@/lib/global';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

const title = 'fetch1';

export const metadata: Metadata = {
  title
};

type Now = {
  now: string;
};

const api = `${APP_URL}/api/now`;

const options: RequestInit = {
  method: 'POST',
  headers: {
    accept: 'application/json' // responseはJSONのみ受け入れ
  },
  next: { revalidate: 10 } // cache test
};

async function MySrvComponent() {
  let res: Response;
  try {
    res = await fetch(api, options);
  } catch (error) {
    return <span className="bg-error">{(error as Error).message}</span>;
  }

  if (!res.ok) {
    return <span className="bg-error">{await res.text()}</span>;
  }

  const data: Now = await res.json();
  return <>{data.now}</>;
}

export default async function Page() {
  return (
    <main className="mx-4 my-3">
      <h1>{title}</h1>
      <p>
        このへん参照:{' '}
        <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching">
          Data Fetching: Fetching | Next.js
        </Link>
      </p>
      <p>
        現在時刻:{' '}
        <Suspense fallback={<Loading />}>
          <MySrvComponent />
        </Suspense>
      </p>
      <ul className="m-0">
        <li className="m-0">SSRなんで「更新」ボタンはありません。</li>
        <li className="m-0">キャッシュのテストで、10秒間は同じ時間が表示されます。</li>
      </ul>
    </main>
  );
}
