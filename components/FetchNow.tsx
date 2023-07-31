'use client';
// swrをクライアントコンポーネントとして使うサンプル
import Loading from '@/components/Loading';
import { APP_URL } from '@/lib/global';
import useSWR, { mutate } from 'swr';

const api = `${APP_URL}/api/now`;

type Response = {
  now: string;
};

type FetcherArg = [
  RequestInfo | URL // fetch()'s URL
  // no payload
];

async function fetcher(args: FetcherArg): Promise<Response> {
  const [fetchInput] = args;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      accept: 'application/json' // responseはJSONのみ受け入れ
    }
  };
  const res = await fetch(fetchInput, options);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export function FetchNow() {
  const key = [api];
  const { data, error, isValidating } = useSWR<Response>(key, fetcher);
  const handler = () => {
    mutate(key);
  };

  if (error) return <span className="bg-error">failed to load. {error?.message}</span>;
  if (isValidating) return <Loading />;

  // render data
  return (
    <span>
      {data?.now}
      <button className="btn btn-sm ml-2" onClick={handler}>
        更新
      </button>
    </span>
  );
}

export default FetchNow;
