import { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';

const title = 'headers';
export const metadata: Metadata = {
  title
};

export default async function Page(request: Request) {
  const headersList = headers();
  return (
    <main className="mx-4 my-3">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link href="/headers?a=1&b=2">{'/headers?a=1&b=2'}</Link>
        </li>
      </ul>
      <h2>request</h2>
      <pre>{JSON.stringify(request, null, 2)}</pre>
      <h2>headers</h2>
      <pre>{JSON.stringify(headersList, null, 2)}</pre>
    </main>
  );
}
