import { Metadata } from 'next';
import { headers } from 'next/headers';
const title = 'headers';
export const metadata: Metadata = {
  title
};

export default async function Page({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const headersList = headers();
  return (
    <main className="mx-4 my-3">
      {/* <h1>{title}</h1>
      <ul>
        <li>
          <Link href="/headers?a=1&b=2">{'/headers?a=1&b=2'}</Link>
        </li>
        <li>
          <Link href="/headers/test?a=3&b=4">{'/headers/test?a=3&b=4'}</Link>
        </li>
        <li>
          <Link href="/headers/test/foo/bar?a=5&b=6">{'/headers/test/foo/bar?a=5&b=6'}</Link>
        </li>
      </ul> */}
      <h2>searchParams & params</h2>
      <pre>{JSON.stringify({ searchParams, params }, null, 2)}</pre>
      <h2>headers</h2>
      <pre>{JSON.stringify(headersList, null, 2)}</pre>
    </main>
  );
}
