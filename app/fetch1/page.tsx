import { Metadata } from 'next';
import Link from 'next/link';

const title = 'fetch1';
export const metadata: Metadata = {
  title
};
type Now = {
  now: string;
};

async function getData(): Promise<Now> {
  const res = await fetch('http://localhost:3000/api/now', { next: { revalidate: 10 } });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
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
      <p></p>
    </main>
  );
}
