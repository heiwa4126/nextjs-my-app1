import { Metadata } from 'next';

const title = 'page0';
export const metadata: Metadata = {
  title
};

export default function Home() {
  return (
    <main className="mx-4 my-3">
      <h1>{title}</h1>
    </main>
  );
}
