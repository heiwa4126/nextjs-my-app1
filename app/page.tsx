import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hello Next.js'
};

export default function Home() {
  return (
    <main>
      <h1>Hello Next.js</h1>
      <button className="btn">Hello daisyUI</button>
    </main>
  );
}
