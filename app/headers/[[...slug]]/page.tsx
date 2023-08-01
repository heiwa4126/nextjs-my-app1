import { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';

const title = 'headers';
export const metadata: Metadata = {
  title
};

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const links = ['/headers?a=1&b=2', '/headers/test?a=3&b=4', '/headers/test/foo/bar?a=5&b=6'];

export default async function Page({ params, searchParams }: PageProps) {
  const headersList = headers();
  return (
    <main className="mx-4 my-3">
      <h1>{title}</h1>
      <p>
        See:{' '}
        <Link href="https://nextjs.org/docs/app/api-reference/file-conventions/page">
          File Conventions: page.js | Next.js
        </Link>
      </p>
      <ul>
        {links.map((link: string) => {
          return (
            <li key={link} className="m-0 p-0">
              <Link href={link}>{link}</Link>
            </li>
          );
        })}
      </ul>
      <h2>searchParams & params</h2>
      <pre>{JSON.stringify({ searchParams, params }, null, 2)}</pre>
      <h2>headers</h2>
      <pre>{JSON.stringify(headersList, null, 2)}</pre>
    </main>
  );
}
